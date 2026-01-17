import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Obesity & Belly Fat Reversal in Hyderabad | Dr. Muddu Surendra Nehru, MD',
  description: 'Reverse central obesity in 90 days with HOMA-IR guided protocols. Free metabolic assessment. Serving Gachibowli, Hyderabad.',
  openGraph: {
    title: 'Obesity & Belly Fat Reversal – 90-Day Program | Dr. Muddu Nehru, MD',
    description: 'Science-backed obesity reversal using HOMA-IR, WHtR, and personalized nutrition. No surgery. No extreme diets.',
    url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/obesity',
    siteName: 'HOMA Health Clinics',
    images: [
      {
        url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/obesity-reversal-hyderabad.jpg',
        width: 1200,
        height: 630,
        alt: 'Obesity remission success - Hyderabad patient',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obesity & Belly Fat Reversal – 90-Day Program',
    description: 'Science-backed obesity reversal using HOMA-IR, WHtR, and personalized nutrition.',
    images: ['https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/obesity-reversal-hyderabad.jpg'],
  },
};

export const dynamic = 'force-static';

export default function ObesityPage() {
  const pageUrl = 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/obesity';
  const pageTitle = 'Obesity & Belly Fat Reversal – 90-Day Program';
  const pageDescription = 'Science-backed obesity reversal using HOMA-IR, WHtR, and personalized nutrition. No surgery. No extreme diets.';

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-50 to-orange-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Obesity & Central Belly Fat Reversal
          </h1>
          <p className="text-lg text-gray-600">
            Reverse visceral fat in 90 days — no surgery, no extreme diets
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Image - Placeholder or actual */}
          <div className="mb-8 text-center">
            <div className="relative h-64 md:h-96 mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/obesity-reversal-hyderabad.jpg"
                alt="Obesity remission success - Hyderabad patient"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            Central obesity (belly fat) is not just cosmetic — it's a sign of severe insulin resistance. Dr. Muddu's protocol uses Waist-to-Height Ratio (WHtR), HOMA-IR, and TyG Index to reverse fat accumulation at the root.
          </p>
          
          <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
            <li>Average waist reduction: 12–16 cm in 90 days</li>
            <li>Personalized Indian food plans — no starvation</li>
            <li>Daily WhatsApp coaching + step tracking</li>
            <li>HOMA-IR guided metabolic intervention</li>
          </ul>

          {/* Share Buttons */}
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

      {/* Minimal Footer */}
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
        id="obesity-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Obesity",
            "description": "Excess body fat, especially abdominal fat, caused by insulin resistance and metabolic dysfunction. Reversible through HOMA-IR guided lifestyle intervention.",
            "url": pageUrl,
            "image": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/obesity-reversal-hyderabad.jpg",
            "associatedAnatomy": {
              "@type": "AnatomicalStructure",
              "name": "Adipose Tissue"
            },
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Lifestyle modification, WHtR monitoring, personalized nutrition"
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
