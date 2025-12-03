import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            🩺 World's First AI-Based Metabolic Remission Platform
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Reverse Metabolic Disease in <span className="text-teal-600">90 Days</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          India's first precision platform for HOMA-IR reduction, waist circumference reversal, and cardiovascular risk lowering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/auth"
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl"
          >
            🚀 Start Your Assessment
          </Link>
          <Link
            href="/auth"
            className="px-8 py-3 bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold rounded-xl transition-colors"
          >
            🔐 Login
          </Link>
        </div>
        
        {/* Testimonials Link */}
        <Link 
          href="/testimonials"
          className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors"
        >
          <span className="mr-2">🏆</span>
          <span className="underline">See Success Stories from 500+ Patients</span>
        </Link>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold">500+</div>
            <div className="text-teal-200 text-sm">Patients Helped</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">85%</div>
            <div className="text-teal-200 text-sm">Remission Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">90</div>
            <div className="text-teal-200 text-sm">Day Program</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">30+</div>
            <div className="text-teal-200 text-sm">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Track Your Metabolic Health Journey
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-gray-800 mb-2">HOMA-IR Tracking</h3>
            <p className="text-gray-600 text-sm">Monitor your insulin resistance with precision calculations</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-800 mb-2">90-Day Program</h3>
            <p className="text-gray-600 text-sm">Daily habit tracking with OKR goals for metabolic remission</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🩺</div>
            <h3 className="font-bold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Dr. Muddu's 30+ years of clinical expertise</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-gray-600 mb-6">
            Join 500+ patients who achieved metabolic remission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors"
            >
              Get Started Free
            </Link>
            <a
              href="https://wa.me/919963721999"
              target="_blank"
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              💬 WhatsApp Dr. Muddu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
