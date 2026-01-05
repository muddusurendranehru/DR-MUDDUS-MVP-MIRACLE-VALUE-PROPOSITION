import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import LandingPageHero from '../components/LandingPageHero';
import TestimonialSlider from '../components/TestimonialSlider';

// 🔑 Force static HTML generation for SEO & Google verification
export const dynamic = 'force-static';

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

export default function Home() {
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
      <div className="min-h-screen">
        {/* New Year / Pongal Promotional Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 py-4 text-white text-center">
          <p className="text-sm font-medium px-4">
            🎉 New Year & Pongal Special: Book Your Free Metabolic Assessment & Get Personalized Nutrition Plan + 30-Day Habit Tracker FREE!
          </p>
          <Link
            href="/assessment"
            className="inline-block bg-white text-red-600 px-6 py-2 rounded-full mt-2 font-bold hover:bg-gray-100 transition-colors"
          >
            📝 Book Your Free Assessment
          </Link>
        </div>
        <LandingPageHero /> {/* modern gradient + buttons */}
        <TestimonialSlider /> {/* testimonials below hero */}
        
        {/* Take Our Survey Banner */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 my-8 rounded-lg text-center max-w-4xl mx-auto px-4 border-2 border-purple-300">
          <h3 className="text-xl font-bold mb-2 text-purple-900">Help Us Improve Your Metabolic Health Journey!</h3>
          <p className="text-gray-800 mb-2 font-medium">
            Take our 2-minute survey and get a free HOMA-IR calculator + personalized nutrition tips.
          </p>
          <p className="text-lg font-bold text-purple-700 mb-4">
            🎉 Get 15% Off on Your First Consultation!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cwzfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors font-medium shadow-lg"
          >
            📊 Take the Survey - Get 15% Off
          </a>
        </div>
        
        {/* Optional: add dashboard preview below */}
      </div>
    </>
  );
}
