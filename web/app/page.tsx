import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import LandingPageHero from '../components/LandingPageHero';
import MetabolicServicesHero from '../components/MetabolicServicesHero';
import TestimonialSlider from '../components/TestimonialSlider';

// 🔑 Force static HTML generation for SEO & Google verification
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Dr. Muddu Surendra Nehru MD Best Diabetologist Gachibowli | HOMA Clinic Hyderabad - Diabetes Cardio Obesity REMISSION',
  description: 'Dr. Muddu Surendra Nehru MD best diabetologist Gachibowli. Years struggling? We test FASTING INSULIN (not glucose) + HOMA-IR. 32yrs ethics-guided care, 35L patients, India #1 5K+ HOMA tests, pioneer cardio-obesity-metabolism. Serving Gachibowli, ISB, IIIT, Banjara Hills & IKEA.',
  keywords: 'Dr Muddu Surendra Nehru MD best diabetologist Gachibowli, diabetes remission Gachibowli, HOMA test Hyderabad, fasting insulin test Gachibowli, diabetes reversal ISB, insulin resistance treatment Hyderabad, HOMA-IR test Gachibowli',
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
        {/* Promotional Banner - ABOVE Hero Section - Best Hook to Attract */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 py-6 text-white text-center">
          <p className="text-lg md:text-xl font-bold px-4 mb-3">
            Struggling with belly fat or fatigue? USE OUR METABOLIC CALCULATORS FIRST IN THE WORLD FREE ONLINE
          </p>
          <p className="text-sm md:text-base mb-4 px-4 opacity-95">
            🎉 New Year & Pongal Special: Free Metabolic Risk Check – No Cost, No Signup
          </p>
          <Link
            href="/tools?utm_source=homepage_banner&utm_medium=cta_button&utm_campaign=metabolic_calculators"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full mt-2 font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:-translate-y-1"
          >
            Free Metabolic Heart Diabetes Risk Check – No Cost, No Signup →
          </Link>
        </div>
        <LandingPageHero /> {/* modern gradient + buttons */}
        <MetabolicServicesHero /> {/* 9 patient segments with service cards */}
        <TestimonialSlider /> {/* testimonials below hero */}
        
        {/* Quick Action Links */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/tools"
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all transform hover:scale-105 border-2 border-blue-200"
              >
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-bold text-gray-900 mb-2">Try Our Free Tools</h3>
                <p className="text-sm text-gray-600">BMI, HOMA-IR & TyG calculators</p>
              </Link>
              <Link
                href="/gallery"
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all transform hover:scale-105 border-2 border-green-200"
              >
                <div className="text-3xl mb-3">📸</div>
                <h3 className="font-bold text-gray-900 mb-2">See Patient Success Stories</h3>
                <p className="text-sm text-gray-600">Real transformations & testimonials</p>
              </Link>
              <Link
                href="/assessment"
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all transform hover:scale-105 border-2 border-purple-200"
              >
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold text-gray-900 mb-2">Start Your Free Assessment</h3>
                <p className="text-sm text-gray-600">15-minute metabolic risk evaluation</p>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Take Our Survey Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 my-8 rounded-lg text-center max-w-4xl mx-auto px-4 text-white">
          <h3 className="text-xl font-bold mb-2">🎉 Get 15% Off Your 90-Day Program</h3>
          <p className="mb-4">Complete our 2-minute survey and unlock your discount.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cw6zfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            📝 Take Survey & Save 15%
          </a>
        </div>
        
        {/* App Ecosystem CTA - Updated Branding */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl text-center my-8 max-w-5xl mx-auto px-4 border-4 border-amber-400 shadow-xl">
          <span className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-base font-bold mb-4 shadow-lg">
            👋 Get Hands-On Experience
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3 text-gray-900">
            🛠️ Free Metabolic Risk Check – No Cost, No Signup
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto leading-relaxed">
            <strong>Dr. Muddu Surendra Nehru MD Miracle Methods Gachibowli</strong> — 
            Try our BMI, HOMA-IR, and TyG calculators. Get 70% off your full program.
          </p>
          <p className="text-sm text-gray-600 mb-6 italic">
            Trusted by visitors to ISB, IIIT, and professionals near IKEA Gachibowli. Appreciated by Megastar Chiranjeevi.
          </p>
          <Link 
            href="/tools" 
            className="inline-block bg-amber-600 text-white px-10 py-4 rounded-full hover:bg-amber-700 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🔍 Get Your Free Risk Check Now →
          </Link>
        </div>
        
        {/* Optional: add dashboard preview below */}
      </div>
    </>
  );
}
