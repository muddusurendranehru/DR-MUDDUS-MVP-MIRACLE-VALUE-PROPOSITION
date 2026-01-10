'use client';

export default function LandingPageHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title - Emphasizing Dr. Muddu's Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent leading-tight">
          Dr. Muddu Surendra Nehru MD
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-yellow-300 leading-tight">
          Miracle Methods Gachibowli
        </h2>
        <p className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Metabolic Reversal
        </p>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto opacity-95 leading-relaxed font-semibold">
          90-Day Program | Diabetes Reversal | Obesity Gone | Heart Risk Zero
        </p>
        <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto opacity-90 font-bold">
          Best Diabetologist in Gachibowli, Hyderabad
        </p>
        
        {/* Local Credibility */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border border-white/20">
          <p className="text-base md:text-lg mb-4 opacity-95">
            <span className="font-bold">🌟 Appreciated by Megastar Chiranjeevi</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 px-4 py-2 rounded-full">⭐ Trusted by ISB Visitors</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎓 IIIT Gachibowli</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🏪 Near IKEA Gachibowli</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cw6zfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 hover:bg-indigo-50 text-xl px-8 py-4 font-bold shadow-2xl rounded-lg transition-all duration-200 inline-block text-center transform hover:-translate-y-1"
          >
            📝 Book Your Free Assessment
          </a>
          <a
            href="https://wa.me/919963721999?text=Hi%20Dr.%20Nehru%2C%20I%20want%20to%20start%20my%20free%20metabolic%20risk%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white hover:bg-green-700 text-xl px-8 py-4 font-bold shadow-2xl rounded-lg transition-all duration-200 inline-block text-center transform hover:-translate-y-1"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-90">
          <div className="font-semibold">Professor of Medicine</div>
          <div className="font-semibold">32+ Years Experience</div>
          <div className="font-semibold">✅ 85% Remission Rate</div>
          <div className="font-semibold">500K+ Patients Treated</div>
        </div>
      </div>
    </section>
  );
}
