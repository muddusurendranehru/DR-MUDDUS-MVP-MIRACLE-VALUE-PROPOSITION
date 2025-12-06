import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// STRIPE CHECKOUT SESSION API
// ============================================================
// 
// SETUP INSTRUCTIONS (When Ready):
// 
// 1. Install Stripe:
//    cd web && npm install stripe
//
// 2. Add to .env.local:
//    STRIPE_SECRET_KEY=sk_live_xxxxx (or sk_test_xxxxx)
//    NEXT_PUBLIC_SITE_URL=https://your-domain.com
//
// 3. For next-auth (optional):
//    npm install next-auth
//
// 4. For direct Neon connection (optional):
//    npm install @neondatabase/serverless
//
// 5. Uncomment the STRIPE ENABLED section below
//
// 6. Create enrollments table in Neon (SQL at bottom of file)
//
// ============================================================

// Check if Stripe is configured
const STRIPE_ENABLED = !!process.env.STRIPE_SECRET_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, email, userId } = body;

    // ============================================================
    // STRIPE NOT CONFIGURED - Return fallback for UPI
    // ============================================================
    if (!STRIPE_ENABLED) {
      return NextResponse.json({ 
        message: 'Stripe not configured. Please use UPI payment via WhatsApp.',
        url: null,
        fallback: 'upi'
      });
    }

    // ============================================================
    // STRIPE ENABLED - Full Implementation
    // Uncomment and use when Stripe is installed
    // ============================================================
    /*
    import Stripe from 'stripe';
    // Option 1: For next-auth users
    // import { getServerSession } from 'next-auth/next';
    // Option 2: For direct Neon connection
    // import { neon } from '@neondatabase/serverless';

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-06-20',
    });

    // ------------------------------------------------------------
    // OPTION A: Using next-auth for authentication
    // ------------------------------------------------------------
    // const session = await getServerSession();
    // if (!session?.user?.email) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    // const userEmail = session.user.email;

    // ------------------------------------------------------------
    // OPTION B: Using email from request body (our current setup)
    // ------------------------------------------------------------
    const userEmail = email;
    if (!userEmail) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    // ------------------------------------------------------------
    // Get user_id from database (if needed for metadata)
    // ------------------------------------------------------------
    // const sql = neon(process.env.DATABASE_URL!);
    // const userRes = await sql`SELECT id FROM users WHERE email = ${userEmail}`;
    // const dbUserId = userRes[0]?.id;
    // if (!dbUserId) {
    //   return NextResponse.json({ error: 'User not found' }, { status: 404 });
    // }

    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Define pricing based on plan
    const pricing: Record<string, { name: string; description: string; amount: number; currency: string }> = {
      monthly: {
        name: 'Monthly Metabolic Program',
        description: 'HOMA-IR tracking, dashboard access, daily habit tracking',
        amount: 99900,  // ₹999 in paise (for INR)
        currency: 'inr',
      },
      full: {
        name: '90-Day Metabolic Remission Program',
        description: 'Personalized AI-guided metabolic healing with Dr. Muddu',
        amount: 199900, // ₹1999 in paise (for INR)
        // OR for USD: amount: 2500 ($25 in cents), currency: 'usd'
        currency: 'inr',
      },
    };

    const selectedPlan = pricing[plan] || pricing.full;

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: selectedPlan.currency,
            product_data: {
              name: selectedPlan.name,
              description: selectedPlan.description,
            },
            unit_amount: selectedPlan.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/diet?day=1&tier=remission-pro&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/enroll`,
      customer_email: userEmail,
      metadata: {
        user_id: userId || '',
        plan: plan,
        email: userEmail,
      },
    });

    return NextResponse.json({ url: stripeSession.url });
    */

    // Placeholder when Stripe key exists but code is commented
    return NextResponse.json({ 
      message: 'Stripe code needs to be uncommented. Using UPI fallback.',
      url: null,
      fallback: 'upi'
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session', fallback: 'upi' },
      { status: 500 }
    );
  }
}

// ============================================================
// SQL: Create enrollments table (Run in Neon SQL Editor)
// ============================================================
/*
-- SAFE: Creates NEW table, does not affect existing data

CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  plan TEXT NOT NULL,
  amount INT NOT NULL,
  currency TEXT DEFAULT 'INR',
  payment_id TEXT,
  payment_method TEXT DEFAULT 'upi',
  program_start_date DATE DEFAULT CURRENT_DATE,
  program_end_date DATE,
  status TEXT DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);

-- Verify
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
*/

// ============================================================
// WEBHOOK: Create /api/stripe-webhook/route.ts for auto-enrollment
// ============================================================
/*
// File: web/app/api/stripe-webhook/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { user_id, plan, email } = session.metadata || {};
    const paymentId = session.payment_intent as string;
    const amount = session.amount_total || 0;

    // Insert enrollment into database
    // Using your backend API:
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.INTERNAL_API_KEY}` 
      },
      body: JSON.stringify({
        user_id,
        plan,
        amount,
        payment_id: paymentId,
        payment_method: 'stripe',
        status: 'active'
      })
    });

    console.log(`✅ Enrollment created: ${email}, plan: ${plan}`);
  }

  return NextResponse.json({ received: true });
}

// Disable body parsing for webhooks
export const config = {
  api: { bodyParser: false }
};
*/
