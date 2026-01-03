import { Metadata } from 'next';
import Script from 'next/script';
import LeadScoringForm from '../components/LeadScoringForm';
import LandingPageHero from '../components/LandingPageHero';

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

// FAQ Structured Data Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can type 2 diabetes be reversed naturally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at HOMA Clinic, we have successfully helped thousands of patients achieve type 2 diabetes remission through our evidence-based 90-day metabolic remission program. Our program focuses on personalized nutrition, lifestyle modifications, and metabolic optimization using advanced metrics like HOMA-IR, HbA1c, and TyG Index.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the HOMA-IR test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HOMA-IR is a blood test that measures insulin resistance, a key indicator of metabolic health. It calculates the ratio of fasting glucose to fasting insulin. High HOMA-IR values indicate insulin resistance, which is often the underlying cause of type 2 diabetes and metabolic syndrome. At HOMA Clinic, we use HOMA-IR as a primary metric to track treatment progress and guide personalized interventions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is your 90-day program different from traditional diabetes care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional care manages diabetes symptoms with medications, while our program focuses on addressing the root cause—metabolic dysfunction—to achieve remission. We use AI-powered tools, personalized nutrition plans, real-time health tracking, dedicated health coaches, and evidence-based protocols to reverse insulin resistance and restore metabolic health in just 90 days. Our approach has achieved an 85% remission rate among patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be diabetic to join the program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The program is ideal for anyone with prediabetes, insulin resistance, metabolic syndrome, or those looking to optimize their metabolic health. We also serve patients with central obesity, hypertension, and cardiovascular disease risk. Early intervention can prevent the progression to full-blown diabetes and reverse metabolic dysfunction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do patients get access to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive access to the HOMA Dashboard, our AI-powered web application for tracking nutrition, health metrics, metabolic parameters (HOMA-IR, TyG Index, HbA1c), step goals, real-time feedback, and personalized treatment protocols. Patients also get dedicated health coaches, motivators, mental health caregivers, and direct access to Dr. Muddu\'s evidence-based treatment protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the program available in Gachibowli, Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! HOMA Clinic serves patients in Gachibowli, Hyderabad, and across India. With 30+ years of clinical experience and over 5,00,000 patients treated, Dr. Muddu Surendra Nehru M.D. offers both in-person consultations and remote program access through our digital platform. Contact us at 09963721999 to learn more.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* FAQ Structured Data for SEO */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <LandingPageHero />
      <LeadScoringForm />
    </>
  );
}
