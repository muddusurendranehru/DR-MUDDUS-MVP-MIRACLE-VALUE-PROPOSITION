import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import Link from 'next/link'
import MobileNav from '@/components/MobileNav'
import OnboardingDemo from '@/components/OnboardingDemo'
import WelcomeBot from '@/components/WelcomeBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HOMA Clinic – Achieve Metabolic Remission in 90 Days',
  description: 'Evidence-based protocols for reversing insulin resistance, high triglycerides, and early metabolic dysfunction — not just managing it.',
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
        <title>HOMA Clinic – Achieve Metabolic Remission in 90 Days</title>
        <meta name="description" content="Evidence-based protocols for reversing insulin resistance, high triglycerides, and early metabolic dysfunction — not just managing it." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Diabetes Reversal Center Health care center Gachibowli",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gachibowli, Hyderabad"
              },
              "telephone": "09963721999",
              "url": "https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Diabetes reversal cost Gachibowli?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "₹999 Metabolic Risk Calculator + 90 Day Program"
                }
              }]
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

              {/* Bottom Bar */}
              <div className="border-t border-gray-700 mt-8 pt-4 text-center">
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

