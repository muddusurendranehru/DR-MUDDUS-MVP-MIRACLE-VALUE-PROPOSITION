import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Kidney Disease Prevention & Protection | Dr. Muddu Surendra Nehru, MD - Hyderabad',
  description: 'Diabetic nephropathy prevention through metabolic remission program in Gachibowli, Hyderabad. Led by Professor Dr. Muddu Surendra Nehru, MD with 32+ years experience.',
  openGraph: {
    title: 'Kidney Disease Prevention & Protection | Dr. Muddu Nehru, MD',
    description: 'Diabetic nephropathy prevention through metabolic remission program. Evidence-based protocols.',
    url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/kidney-disease',
    siteName: 'HOMA Health Clinics',
    images: [
      {
        url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/ckd-insulin-resistance-hyderabad.jpg.jpg',
        width: 1200,
        height: 630,
        alt: 'Kidney Disease Prevention Program - Dr. Muddu Nehru, MD',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kidney Disease Prevention & Protection',
    description: 'Diabetic nephropathy prevention through metabolic remission program.',
    images: ['https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/ckd-insulin-resistance-hyderabad.jpg'],
  },
};

export const dynamic = 'force-static';

export default function KidneyDiseasePage() {
  const pageUrl = 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/conditions/kidney-disease';
  const pageTitle = 'Kidney Disease Prevention & Protection - Dr. Muddu Nehru, MD';
  const pageDescription = 'Diabetic nephropathy prevention through metabolic remission program in Gachibowli, Hyderabad.';

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero with Image Placeholder */}
        <header className="mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Kidney Health Protection in Gachibowli – Dr. Muddu Surendra Nehru, MD
              </h1>
              <p className="text-gray-700 mb-4">
                Hyderabad's leading metabolic approach to kidney protection, led by Professor Dr. Muddu Surendra Nehru, MD — 32+ years of clinical excellence in Gachibowli.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/ckd-insulin-resistance-hyderabad.jpg.jpg"
                alt="Kidney Disease Prevention Program"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </header>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Patients from Hyderabad Trust Our Protocol</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>90-day structured remission pathway</li>
          <li>Personalized nutrition & daily habit tracking</li>
          <li>Real-time WhatsApp support from medical team</li>
          <li>Addresses root cause: insulin resistance</li>
          <li>Prevents diabetic nephropathy progression</li>
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

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-green-800 mb-2">Free Risk Assessment</h3>
          <p className="text-gray-700 mb-4">
            Start your journey with a 15-minute metabolic risk test.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cw6zfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 font-medium"
          >
            📝 Book Your Free Assessment
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Dr. Muddu Surendra Nehru, MD | Metabolic Health Clinic | Gachibowli, Hyderabad, Telangana</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center border-t mt-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:underline font-medium mr-4">
            ← Back to Home
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/about" className="text-blue-600 hover:underline font-medium ml-4">
            About Dr. Muddu
          </Link>
        </div>
      </footer>

      {/* Schema.org - MedicalCondition */}
      <script
        id="kidney-disease-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": "Chronic Kidney Disease",
            "description": "Kidney damage caused by diabetes and insulin resistance. Preventable and reversible through metabolic remission protocols.",
            "url": pageUrl,
            "image": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/ckd-insulin-resistance-hyderabad.jpg",
            "associatedAnatomy": {
              "@type": "AnatomicalStructure",
              "name": "Kidneys"
            },
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Metabolic remission protocol, HOMA-IR guided nutrition, lifestyle modification"
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
