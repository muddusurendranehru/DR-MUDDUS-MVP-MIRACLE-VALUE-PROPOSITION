import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: "Type 2 Diabetes Remission in Hyderabad | Dr. Muddu Surendra Nehru, MD",
  description: "Reverse type 2 diabetes in 90 days with HOMA-IR based protocols. Free assessment. Serving Gachibowli, Hyderabad.",
  openGraph: {
    title: "Type 2 Diabetes Remission in 90 Days | Dr. Muddu Nehru, MD",
    description: "Evidence-based diabetes reversal in 90 days — no heavy medications. HOMA-IR guided protocols.",
    url: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/diabetes",
    siteName: "HOMA Health Clinics",
    images: [
      {
        url: "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/90dayhealthtracker1.jpg",
        width: 1200,
        height: 630,
        alt: "90-Day Diabetes Remission Program - Dr. Muddu Nehru, MD",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Type 2 Diabetes Remission in 90 Days",
    description: "Evidence-based diabetes reversal — HOMA-IR guided protocols",
    images: ["https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/90dayhealthtracker1.jpg"],
  },
};

// Force static generation for SEO
export const dynamic = 'force-static';

export default function DiabetesPage() {
  const pageUrl = "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/diabetes";
  const pageTitle = "Type 2 Diabetes Remission in 90 Days - Dr. Muddu Nehru, MD";
  const pageDescription = "Evidence-based diabetes reversal in 90 days — no heavy medications. HOMA-IR guided protocols.";

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero with Image */}
      <header className="bg-gradient-to-r from-blue-50 to-red-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Type 2 Diabetes Remission Program
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Evidence-based reversal in 90 days — no heavy medications
              </p>
              <p className="text-gray-700">
                Dr. Muddu's protocol uses HOMA-IR, TyG Index, and personalized nutrition to reverse insulin resistance — the root cause of type 2 diabetes.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/90dayhealthtracker1.jpg"
                alt="90-Day Diabetes Remission Program"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
            <li>90% of patients reduce HbA1c by 1.5–2.5% in 90 days</li>
            <li>No extreme diets — sustainable Indian food plans</li>
            <li>Daily WhatsApp coaching + lab monitoring</li>
            <li>HOMA-IR guided metabolic intervention</li>
          </ul>

          {/* Share Section */}
          <ShareButtons 
            pageUrl={pageUrl}
            pageTitle={pageTitle}
            pageDescription={pageDescription}
          />

          {/* Assessment CTA */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 py-6 text-white text-center rounded-lg mb-6">
            <Link 
              href="/tools?utm_source=condition_page&utm_medium=cta_button&utm_campaign=metabolic_calculators"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-full mt-2 font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:-translate-y-1"
            >
              Free Metabolic Heart Diabetes Risk Check – No Cost, No Signup →
            </Link>
          </div>

          <div className="bg-green-50 p-6 rounded-lg text-center mt-6">
            <a 
              href="https://wa.me/919963721999" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg"
            >
              📞 Start Free Assessment – 09963721999
            </a>
          </div>
        </div>
      </main>

      {/* Minimal Footer - Standalone View */}
      <footer className="py-6 text-center border-t bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:underline font-medium mr-4">
            ← Back to Home
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/about" className="text-blue-600 hover:underline font-medium ml-4">
            About Dr. Muddu
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Dr. Muddu Surendra Nehru, MD | HOMA Health Clinics | Gachibowli, Hyderabad
        </p>
      </footer>

      {/* Schema.org - MedicalCondition */}
      <script
        id="diabetes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Type 2 Diabetes",
            "description": "A chronic metabolic disorder characterized by high blood sugar due to insulin resistance. Reversible through HOMA-IR guided lifestyle intervention.",
            "url": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/diabetes",
            "image": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/90dayhealthtracker1.jpg",
            "associatedAnatomy": {
              "@type": "AnatomicalStructure",
              "name": "Pancreas"
            },
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Lifestyle modification, personalized nutrition, daily activity tracking"
            },
            "provider": {
              "@type": "Person",
              "name": "Dr. Muddu Surendra Nehru, MD",
              "url": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/about"
            }
          })
        }}
      />
    </div>
  );
}
