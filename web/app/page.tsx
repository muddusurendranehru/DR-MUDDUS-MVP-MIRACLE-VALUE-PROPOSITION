import { Metadata } from 'next';
import LeadScoringForm from '@/components/LeadScoringForm';
import HomePageClient from '@/components/HomePageClient';

// 🔑 Force static HTML generation for SEO & Google verification
export const dynamic = 'force-static';

// Optional: Revalidate every 24 hours if you want ISR (not needed now)
// export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Dr Muddu\'s HOMA Clinic Gachibowli Hyderabad India - Diabetes Cardio Obesity REMISSION',
  description: 'Years struggling? We test FASTING INSULIN (not glucose) + HOMA-IR. 32yrs ethics-guided care, 35L patients, India #1 5K+ HOMA tests, pioneer cardio-obesity-metabolism. 25 apps built. Pioneer close monitoring → REMISSION.',
  keywords: 'diabetes remission Gachibowli, HOMA test Hyderabad, fasting insulin test, Dr Muddu Nehru, diabetes reversal, insulin resistance, HOMA-IR test India',
  openGraph: {
    title: 'Dr Muddu Nehru | Diabetologist Gachibowli',
    description: '90 Day Diabetes Remission | 85% Success',
    url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com',
    siteName: 'HOMA Clinic',
    images: [
      {
        url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/og-chiranjeevi.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Muddu Nehru - Diabetologist Gachibowli',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Muddu Nehru | Diabetologist Gachibowli',
    description: '90 Day Diabetes Remission | 85% Success',
    images: ['https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/og-chiranjeevi.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <LeadScoringForm />
      <HomePageClient />
    </>
  );
}
