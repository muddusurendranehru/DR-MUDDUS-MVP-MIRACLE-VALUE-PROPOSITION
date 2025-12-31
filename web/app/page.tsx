import { Metadata } from 'next';
import LeadScoringForm from '@/components/LeadScoringForm';
import HomePageClient from '@/components/HomePageClient';

// 🔑 Force static HTML generation for SEO & Google verification
export const dynamic = 'force-static';

// Optional: Revalidate every 24 hours if you want ISR (not needed now)
// export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'HOMA Clinic | Achieve Metabolic Remission in 90 Days — Not Just Manage It',
  description: 'India\'s first AI-powered metabolic clinic. Reverse insulin resistance, prediabetes & kidney risk with the HOMA blood test. Free metabolic self-assessment.',
  keywords: 'HOMA test India, insulin resistance clinic, prediabetes reversal, metabolic remission, Dr Muddu Surendra Nehru',
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
