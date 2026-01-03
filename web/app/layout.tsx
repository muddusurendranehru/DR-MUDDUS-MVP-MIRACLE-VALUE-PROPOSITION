import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import OnboardingDemo from '@/components/OnboardingDemo'
import WelcomeBot from '@/components/WelcomeBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr Muddu\'s HOMA Clinic Gachibowli Hyderabad India - Diabetes Cardio Obesity REMISSION',
  description: 'Years struggling? We test FASTING INSULIN (not glucose) + HOMA-IR. 32yrs ethics-guided care, 35L patients, India #1 5K+ HOMA tests, pioneer cardio-obesity-metabolism. 25 apps built. Pioneer close monitoring → REMISSION.',
  verification: {
    google: 'KR-S5Yw9tbmd22VH8sY4wkwGxD3jv_UiIGHYgeHAlRM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="KR-S5Yw9tbmd22VH8sY4wkwGxD3jv_UiIGHYgeHAlRM" />
        <title>Dr Muddu's HOMA Clinic Gachibowli Hyderabad India - Diabetes Cardio Obesity REMISSION</title>
        <meta name="description" content="Years struggling? We test FASTING INSULIN (not glucose) + HOMA-IR. 32yrs ethics-guided care, 35L patients, India #1 5K+ HOMA tests, pioneer cardio-obesity-metabolism. 25 apps built. Pioneer close monitoring → REMISSION." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com" />
        <meta property="og:title" content="Dr Muddu Nehru | Diabetologist Gachibowli" />
        <meta property="og:description" content="90 Day Diabetes Remission | 85% Success" />
        <meta property="og:image" content="https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/og-chiranjeevi.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com" />
        <meta name="twitter:title" content="Dr Muddu Nehru | Diabetologist Gachibowli" />
        <meta name="twitter:description" content="90 Day Diabetes Remission | 85% Success" />
        <meta name="twitter:image" content="https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/og-chiranjeevi.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Dr Muddu's HOMA Clinic Gachibowli Hyderabad India - Diabetes Cardio Obesity REMISSION",
              "alternateName": "Diabetes Reversal Center Health care center Gachibowli",
              "description": "Years struggling? We test FASTING INSULIN (not glucose) + HOMA-IR. 32yrs ethics-guided care, 35L patients, India #1 5K+ HOMA tests, pioneer cardio-obesity-metabolism. 25 apps built. Pioneer close monitoring → REMISSION.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gachibowli",
                "addressRegion": "Telangana",
                "addressCountry": "IN",
                "streetAddress": "Diabetes Reversal Center Health care center Gachibowli"
              },
              "telephone": "09963721999",
              "url": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "350",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "₹₹",
              "medicalSpecialty": ["Endocrinology", "Cardiology", "Metabolic Medicine"],
              "founder": {
                "@type": "Person",
                "name": "Dr. Muddu Surendra Nehru",
                "jobTitle": "Professor of Medicine"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Best diabetologist Gachibowli?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Muddu Surendra Nehru MD is the best diabetologist in Gachibowli, Hyderabad. With 30+ years of experience, 500,000+ patients treated, and 85% remission rate using the evidence-based 90-day HOMA protocol. Professor of Medicine specializing in diabetes reversal, insulin resistance, and metabolic health."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Diabetes reversal cost Gachibowli?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "₹999 Metabolic Risk Calculator + 90 Day Program. The program includes personalized treatment plans, HOMA-IR testing, nutrition tracking, and continuous monitoring for metabolic remission."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Diabetes reversal cost Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "₹999 Metabolic Risk Calculator + 90 Day Program at HOMA Clinic Gachibowli. Dr. Muddu Nehru MD offers evidence-based diabetes reversal protocols with 85% success rate. Located in Gachibowli, Hyderabad. Call 09963721999 for consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "HOMA IR test near me?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HOMA-IR test available at HOMA Clinic Gachibowli, Hyderabad. Dr. Muddu Nehru MD offers comprehensive metabolic testing including HOMA-IR (Homeostatic Model Assessment for Insulin Resistance), fasting glucose, triglycerides, and TyG Index. Address: Diabetes Reversal Center Health care center Gachibowli. Phone: 09963721999."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Dr Muddu's Health Apps Ecosystem",
              "description": "Comprehensive suite of AI-powered health applications by Dr. Muddu Surendra Nehru MD",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Drug Trials Tracker",
                  "description": "Track and manage clinical drug trials",
                  "url": "https://drug-trials-frontend.onrender.com",
                  "applicationCategory": "HealthApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "OCR Report Analyzer",
                  "description": "AI-powered medical report analysis using OCR technology",
                  "url": "https://ai-image-ocr-1.onrender.com",
                  "applicationCategory": "HealthApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "PCOS HOMA Score",
                  "description": "Calculate PCOS HOMA-IR score for metabolic assessment",
                  "url": "https://pcos-homaiq-score-frontend.onrender.com",
                  "applicationCategory": "HealthApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "90-Day Metrics",
                  "description": "Track your 90-day health journey and metabolic metrics",
                  "url": "https://healthmetrics-render1.onrender.com",
                  "applicationCategory": "HealthApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Nutrition Bot",
                  "description": "AI nutrition guidance powered by HOMA Foods - Get personalized nutrition recommendations",
                  "url": "https://homa-foods-nutrition.onrender.com",
                  "applicationCategory": "HealthApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {/* Mobile Navigation */}
          <MobileNav />
          
          {/* Global Header */}
          <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-2 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <h1 className="text-sm md:text-base font-bold">
                    DR. MUDDU SURENDRA NEHRU M.D.
                  </h1>
                  <div className="hidden md:block text-gray-300">|</div>
                  <p className="text-xs md:text-sm text-gray-200">
                    Professor of Medicine • Senior Physician • 30+ Years Experience
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-2 md:gap-4 mt-1 md:mt-0">
                  <a href="tel:+919963721999" className="text-xs md:text-sm font-semibold hover:text-yellow-300 transition-colors">
                    📞 09963721999
                  </a>
                  <span className="text-gray-400 hidden md:inline">|</span>
                  <div className="flex gap-2 text-xs">
                    <a href="https://wa.me/919963721999" target="_blank" className="hover:text-green-300 transition-colors">JOIN</a>
                    <span className="text-gray-400">•</span>
                    <a href="https://wa.me/919963721999?text=I want to donate" target="_blank" className="hover:text-yellow-300 transition-colors">DONATE</a>
                    <span className="text-gray-400">•</span>
                    <a href="https://wa.me/919963721999?text=I am interested in franchise" target="_blank" className="hover:text-pink-300 transition-colors">FRANCHISE</a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Global Footer */}
          <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Doctor Info */}
                <div>
                  <h3 className="text-lg font-bold text-teal-400 mb-3">🩺 HOMA Clinic</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Dr. Muddu Surendra Nehru M.D.</strong>
                  </p>
                  <p className="text-xs text-gray-400">
                    Professor of Medicine<br />
                    Senior Physician<br />
                    30+ Years of Clinical Experience<br />
                    World's First Physician to Develop AI-Based Web App for Nutrition, Health Metrics & Drug Trials
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-bold text-teal-400 mb-3">Quick Links</h3>
                  <div className="flex flex-col gap-2 text-sm">
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">🏠 Home</Link>
                    <Link href="/auth" className="text-gray-300 hover:text-white transition-colors">🔐 Login / Sign Up</Link>
                    <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">📊 Dashboard</Link>
                    <Link href="/remission-program" className="text-gray-300 hover:text-white transition-colors">🎯 90-Day Program</Link>
                    <Link href="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">🏆 Success Stories</Link>
                    <Link href="/upgrade" className="text-gray-300 hover:text-green-400 transition-colors">💎 Premium Plans</Link>
                    <Link href="/enroll" className="text-gray-300 hover:text-yellow-400 transition-colors">🎯 Enroll Now</Link>
                    <Link href="/pricing" className="text-gray-300 hover:text-amber-400 transition-colors">💰 All Packages</Link>
                    <Link href="/zoom" className="text-gray-300 hover:text-purple-400 transition-colors">📹 Zoom Sundays</Link>
                    <Link href="/gallery" className="text-gray-300 hover:text-purple-400 transition-colors">📸 Gallery</Link>
                    <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">📝 Blog / Health Insights</Link>
                    <Link href="/disclaimer" className="text-gray-300 hover:text-red-400 transition-colors">⚖️ Legal / Disclaimer</Link>
                  </div>
                </div>

                {/* Doctor Training Program */}
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">🎓 Doctor Training</h3>
                  <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-lg p-3 border border-yellow-600/30">
                    <p className="text-sm font-semibold text-yellow-300 mb-2">
                      Become a Certified Metabolism Specialist!
                    </p>
                    <p className="text-xs text-gray-300 mb-2">
                      🌍 Training Available Across the World
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-gray-400 mb-3">
                      <span>✓ Online Training Programs</span>
                      <span>✓ Offline Workshops</span>
                      <span>✓ Certification Course</span>
                      <span>✓ Evidence-Based Protocols</span>
                    </div>
                    <a 
                      href="https://wa.me/919963721999?text=I am a doctor interested in Metabolism Specialist Training Program" 
                      target="_blank" 
                      className="inline-block w-full text-center bg-yellow-600 hover:bg-yellow-700 text-white text-xs font-bold py-2 px-3 rounded transition-colors"
                    >
                      📩 Enquire Now
                    </a>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-bold text-teal-400 mb-3">Contact & Connect</h3>
                  <div className="flex flex-col gap-2 text-sm">
                    <a href="tel:+919963721999" className="text-gray-300 hover:text-white transition-colors">
                      📞 09963721999
                    </a>
                    <a href="https://wa.me/919963721999" target="_blank" className="text-gray-300 hover:text-green-400 transition-colors">
                      💬 WhatsApp
                    </a>
                    <a href="https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                      🌐 HOMA Clinic Website
                    </a>
                    <a 
                      href="https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      📺 YouTube
                    </a>
                    <a href="https://instagram.com/homahealthcarecenter" target="_blank" className="text-gray-300 hover:text-pink-400 transition-colors">
                      📷 Instagram/FB: homahealthcarecenter
                    </a>
                  </div>
                </div>
              </div>

              {/* App Ecosystem Section */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-bold text-teal-400 mb-4 text-center">🩺 Dr Muddu's App Ecosystem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {/* Nutrition Bot - Highlighted */}
                  <a
                    href="https://homa-foods-nutrition.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 rounded-xl p-4 text-white transition-all transform hover:scale-105 shadow-lg border-2 border-green-400"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🍎</span>
                      <div>
                        <div className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold inline-block mb-1">
                          #1 NUTRITION FOCUS
                        </div>
                        <h4 className="font-bold text-lg">Nutrition Bot</h4>
                      </div>
                    </div>
                    <p className="text-sm text-green-100">AI nutrition guidance powered by HOMA Foods</p>
                    <div className="mt-2 text-xs text-green-200">Visit App →</div>
                  </a>

                  {/* Other Apps */}
                  <a
                    href="https://drug-trials-frontend.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-white transition-all transform hover:scale-105 border border-gray-600"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">💊</span>
                      <h4 className="font-bold">Drug Trials Tracker</h4>
                    </div>
                    <p className="text-sm text-gray-400">Track and manage clinical drug trials</p>
                  </a>

                  <a
                    href="https://ai-image-ocr-1.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-white transition-all transform hover:scale-105 border border-gray-600"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📄</span>
                      <h4 className="font-bold">OCR Report Analyzer</h4>
                    </div>
                    <p className="text-sm text-gray-400">AI-powered medical report analysis</p>
                  </a>

                  <a
                    href="https://pcos-homaiq-score-frontend.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-white transition-all transform hover:scale-105 border border-gray-600"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🎯</span>
                      <h4 className="font-bold">PCOS HOMA Score</h4>
                    </div>
                    <p className="text-sm text-gray-400">Calculate PCOS HOMA-IR score</p>
                  </a>

                  <a
                    href="https://healthmetrics-render1.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-white transition-all transform hover:scale-105 border border-gray-600"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📊</span>
                      <h4 className="font-bold">90-Day Metrics</h4>
                    </div>
                    <p className="text-sm text-gray-400">Track your 90-day health journey</p>
                  </a>
                </div>
              </div>

              {/* Interactive Onboarding Demo */}
              <OnboardingDemo />

              {/* Dr. Muddu + Chiranjeevi Section */}
              <div className="mt-8 text-center">
                <div className="inline-block">
                  <img
                    src="/images/dr-muddu-chiranjeevi.jpg.jpg"
                    alt="Dr. Muddu Surendra Nehru with Chiranjeevi"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-yellow-400 shadow-xl"
                  />
                  <p className="mt-3 text-sm text-gray-300 font-medium">
                    🌟 Dr. Muddu with Megastar Chiranjeevi
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Professor of Medicine • 30+ Years Experience • World's First AI Health App Pioneer
                  </p>
                </div>
              </div>

              {/* GBP Widget - Above Copyright */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-200 mb-8 mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">
                      ⭐ HOMA Clinic Gachibowli
                    </h3>
                    <p className="text-indigo-700 mb-4">
                      Diabetes Reversal Center | Dr. Muddu Nehru MD
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Diabetes+Reversal+Center+Health+care+center+Gachibowli" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                      >
                        📍 Directions
                      </a>
                      <a 
                        href="tel:09963721999" 
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                      >
                        📱 Call Now
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.3489!3d17.4227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzIyLjAiTiA3OMKwMjAnNTYuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                      width="100%" 
                      height="120" 
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Diabetes Reversal Center Health care center Gachibowli Location"
                    />
                  </div>
                </div>
              </div>

              {/* WhatsApp Share Button - Footer */}
              <div className="text-center mt-6 mb-4">
                <a
                  href="https://wa.me/919963721999?text=Best%20diabetologist%20Gachibowli%20Dr%20Muddu%20Nehru%2090%20day%20remission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-share inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105"
                >
                  💬 Share on WhatsApp
                </a>
              </div>

              {/* NEXT STEPS Section */}
              <div className="footer-next-steps grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl text-white">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1045/1045618.png" 
                    alt="GBP Photos" 
                    className="w-12 h-12 mb-2"
                    loading="lazy"
                  />
                  <span className="font-bold text-sm">1. GBP 6 Photos</span>
                  <span className="text-xs">(CHIRU1 logo)</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2272/2272810.png" 
                    alt="Reviews" 
                    className="w-12 h-12 mb-2"
                    loading="lazy"
                  />
                  <span className="font-bold text-sm">2. 5 Staff Reviews</span>
                  <span className="text-xs">(₹100 Amazon)</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/10825/10825123.png" 
                    alt="Reel" 
                    className="w-12 h-12 mb-2"
                    loading="lazy"
                  />
                  <span className="font-bold text-sm">3. Insta Reel</span>
                  <span className="text-xs">(Lady doctor iPad)</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/484/484662.png" 
                    alt="Blog" 
                    className="w-12 h-12 mb-2"
                    loading="lazy"
                  />
                  <span className="font-bold text-sm">4. Blog #1</span>
                  <span className="text-xs">HOMA-IR Explained</span>
                </div>
              </div>

              {/* GIVE/DONATE Section */}
              <div className="footer-give bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-white text-center mb-6">
                <h3 className="text-xl font-bold mb-2">❤️ GIVE - Support Metabolic Remission</h3>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/10709/10709095.png" 
                  alt="Donate Heart" 
                  className="w-16 h-16 mx-auto mb-4"
                  loading="lazy"
                />
                <p className="text-sm mb-4">Help 500K+ patients achieve 85% remission</p>
                <a
                  href="https://wa.me/919963721999?text=I want to DONATE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  Donate Now (UPI)
                </a>
              </div>

              {/* PAYMENTS Section */}
              <div className="footer-payments bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-center font-bold text-lg mb-4 text-gray-800">100% Secure Payments</h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <a
                    href="whatsapp://send?phone=919963721999&text=UPI HOMA Basic"
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow hover:shadow-lg transition-all"
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/11645/11645614.png"
                      alt="UPI"
                      width={40}
                      height={40}
                      sizes="(max-width: 768px) 40px, 60px"
                      className="h-8 w-auto"
                      unoptimized
                    />
                    <span className="font-bold text-sm">Pay ₹999</span>
                  </a>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow">
                    <Image
                      src="https://seeklogo.com/images/V/visa-logo-E7DA9E050D-seeklogo.com.png"
                      alt="Visa"
                      width={60}
                      height={40}
                      sizes="(max-width: 768px) 40px, 60px"
                      className="h-8 w-auto"
                      unoptimized
                    />
                    <span className="font-bold text-sm">Visa</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png"
                      alt="PayPal"
                      width={40}
                      height={40}
                      sizes="(max-width: 768px) 40px, 60px"
                      className="h-8 w-auto"
                      unoptimized
                    />
                    <span className="font-bold text-sm">PayPal</span>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-700 mt-4 pt-4 text-center">
                <p className="text-xs text-gray-400">
                  © 2025 HOMA Clinic | Dr. Muddu Surendra Nehru M.D. | All Rights Reserved
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  🎯 "Achieve Metabolic Remission in 90 Days — Not Just Manage It"
                </p>
                <div className="flex justify-center gap-4 mt-3 text-xs">
                  <a href="https://wa.me/919963721999?text=I want to JOIN" target="_blank" className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition-colors">
                    JOIN
                  </a>
                  <a href="https://wa.me/919963721999?text=I want to DONATE" target="_blank" className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded transition-colors">
                    DONATE
                  </a>
                  <a href="https://wa.me/919963721999?text=I want FRANCHISE info" target="_blank" className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition-colors">
                    FRANCHISE
                  </a>
                </div>
              </div>
            </div>
          </footer>

          {/* Welcome Bot */}
          <WelcomeBot />
        </AuthProvider>
      </body>
    </html>
  )
}

