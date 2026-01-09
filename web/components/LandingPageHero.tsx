'use client';

export default function LandingPageHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
          Best Metabolic Doctor in Hyderabad | Metabolic Reversal in 90 Days
        </h1>
        
        {/* Keyword-Rich Subtitle */}
        <p className="subtitle text-gray-600 text-center mt-2 text-lg md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto opacity-95 leading-relaxed">
          Specializing in insulin resistance, PCOS, central obesity & heart disease prevention. Serving Gachibowli, Ameerpet, Bachupally & Patancheru.
        </p>
        
        {/* Hyperlocal Service Area Notice */}
        <p className="text-sm md:text-base text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Serving Gachibowli, Ameerpet, Bachupally & Patancheru with at-home metabolic assessments.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cw6zfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 hover:bg-indigo-50 text-xl px-8 py-4 font-semibold shadow-2xl rounded-lg transition-all duration-200 inline-block text-center"
          >
            📝 Book Your Free Assessment
          </a>
          <a
            href="https://wa.me/919963721999?text=Hi%20Dr.%20Nehru%2C%20I%20want%20to%20start%20my%20free%20metabolic%20risk%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white hover:bg-green-700 text-xl px-8 py-4 font-semibold shadow-2xl rounded-lg transition-all duration-200 inline-block text-center"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <div>Dr. Muddu Surendra Nehru, MD</div>
          <div>Professor of Medicine</div>
          <div>✅ 1000+ Patients Reversed</div>
        </div>
      </div>
    </section>
  );
}
