'use client';

import Link from 'next/link';

// Static testimonials data - NO DATABASE NEEDED
// Later you can migrate this to database when ready
const testimonials = [
  {
    id: '1',
    name: 'Lakshmi R.',
    location: 'Hyderabad',
    age: 52,
    gender: 'female',
    avatar_gradient: 'from-pink-400 to-rose-500',
    avatar_emoji: '👩',
    photo_url: '/images/waist1.jpg',
    video_url: 'https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg',
    quote: 'After 3 months with Dr. Muddu\'s program, my HOMA-IR dropped from 8.5 to 2.1! I never thought I could reverse my prediabetes without heavy medications. The daily tracking kept me accountable.',
    metrics_before: { HOMA_IR: 8.5, BMI: 32.4, HbA1c: 7.2, waist_cm: 98 },
    metrics_after: { HOMA_IR: 2.1, BMI: 27.8, HbA1c: 5.8, waist_cm: 84 },
    completed_program: true,
    program_days: 90,
  },
  {
    id: '2',
    name: 'Rajesh K.',
    location: 'Bangalore',
    age: 45,
    gender: 'male',
    avatar_gradient: 'from-blue-400 to-indigo-500',
    avatar_emoji: '👨',
    quote: 'My triglycerides were 380 and TyG index was dangerously high. Dr. Muddu\'s metabolic approach helped me understand the science behind insulin resistance. Now I feel 10 years younger!',
    metrics_before: { HOMA_IR: 6.2, BMI: 29.1, HbA1c: 6.8, TyG: 9.8 },
    metrics_after: { HOMA_IR: 1.8, BMI: 25.5, HbA1c: 5.4, TyG: 8.2 },
    completed_program: true,
    program_days: 90,
  },
  {
    id: '3',
    name: 'Priya S.',
    location: 'Chennai',
    age: 38,
    gender: 'female',
    avatar_gradient: 'from-purple-400 to-pink-500',
    avatar_emoji: '👩',
    photo_url: '/images/waist2.jpg',
    video_url: 'https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg',
    quote: 'Post-pregnancy weight and PCOD made my life difficult. The 90-day program was life-changing. My waist reduced from 96cm to 82cm and I finally feel confident again!',
    metrics_before: { HOMA_IR: 5.8, BMI: 31.2, HbA1c: 6.5, waist_cm: 96 },
    metrics_after: { HOMA_IR: 1.6, BMI: 24.8, HbA1c: 5.2, waist_cm: 82 },
    completed_program: true,
    program_days: 90,
  },
  {
    id: '4',
    name: 'Suresh M.',
    location: 'Mumbai',
    age: 58,
    gender: 'male',
    avatar_gradient: 'from-teal-400 to-cyan-500',
    avatar_emoji: '👨‍💼',
    quote: 'As a businessman, I ignored my health for years. My fasting insulin was through the roof. Dr. Muddu\'s scientific approach and the daily habit tracking changed everything.',
    metrics_before: { HOMA_IR: 9.2, BMI: 33.5, HbA1c: 8.1, BP: '150/95' },
    metrics_after: { HOMA_IR: 2.4, BMI: 28.2, HbA1c: 6.2, BP: '128/82' },
    completed_program: true,
    program_days: 90,
  },
  {
    id: '5',
    name: 'Anita G.',
    location: 'Delhi',
    age: 48,
    gender: 'female',
    avatar_gradient: 'from-orange-400 to-amber-500',
    avatar_emoji: '👩‍🦰',
    photo_url: '/images/waist4.jpg',
    video_url: 'https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg',
    quote: 'Being post-menopausal, I thought weight gain was inevitable. Wrong! The metabolic remission program helped me lose 12kg and my energy levels are incredible now.',
    metrics_before: { HOMA_IR: 7.1, BMI: 30.8, HbA1c: 6.9, waist_cm: 94 },
    metrics_after: { HOMA_IR: 1.9, BMI: 26.1, HbA1c: 5.6, waist_cm: 80 },
    completed_program: true,
    program_days: 90,
  },
  {
    id: '6',
    name: 'Sunita P.',
    location: 'Kolkata',
    age: 50,
    gender: 'female',
    avatar_gradient: 'from-emerald-400 to-teal-500',
    avatar_emoji: '👩',
    photo_url: '/images/waist5.jpg',
    video_url: 'https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg',
    quote: 'I was told I\'d never lose weight after menopause. Dr. Muddu\'s program changed everything. My waist dropped from 96cm to 80cm — I finally feel confident in my own skin.',
    metrics_before: { HOMA_IR: 7.8, BMI: 31.5, HbA1c: 7.0, waist_cm: 96 },
    metrics_after: { HOMA_IR: 2.0, BMI: 25.8, HbA1c: 5.5, waist_cm: 80 },
    completed_program: true,
    program_days: 90,
  },
];

// Helper function to get color based on metric improvement
const getImprovementColor = (before: number, after: number) => {
  const improvement = ((before - after) / before) * 100;
  if (improvement >= 50) return 'text-green-600';
  if (improvement >= 25) return 'text-teal-600';
  if (improvement > 0) return 'text-blue-600';
  return 'text-gray-600';
};

// Get initials for avatar
const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🏆 Success Stories
          </h1>
          <p className="text-lg md:text-xl text-teal-100 mb-6">
            Real Patients. Real Results. Real Metabolic Remission.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-teal-200">Patients Treated</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-teal-200">Remission Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">90 Days</div>
              <div className="text-teal-200">To Transform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 ${
                index % 2 === 0 ? 'border-teal-500' : 'border-blue-500'
              } hover:shadow-xl transition-shadow`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar & Info */}
                  <div className="flex items-start gap-4 md:w-1/3">
                    {/* Photo or Stylized Avatar */}
                    {t.photo_url ? (
                      <img
                        src={t.photo_url}
                        alt={`${t.name}'s transformation`}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-lg ring-2 ring-teal-400"
                      />
                    ) : (
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.avatar_gradient} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg ring-2 ring-white`}>
                        {t.avatar_emoji}
                      </div>
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{t.name}</h2>
                      <p className="text-sm text-gray-500">{t.age} yrs • {t.location}</p>
                      {t.completed_program && (
                        <span className="inline-flex items-center mt-2 px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                          🎯 90-Day Remission Graduate
                        </span>
                      )}
                      {/* Video Link */}
                      {t.video_url && (
                        <a
                          href={t.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 ml-2 px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full hover:bg-red-200 transition-colors"
                        >
                          ▶️ Watch Story
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Quote & Metrics */}
                  <div className="md:w-2/3">
                    <blockquote className="text-gray-700 italic text-lg mb-6 relative">
                      <span className="text-4xl text-teal-300 absolute -top-2 -left-2">"</span>
                      <p className="pl-6">{t.quote}</p>
                    </blockquote>

                    {/* Before/After Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                        <h3 className="text-sm font-semibold text-red-800 mb-2 flex items-center">
                          <span className="mr-1">📉</span> Before Program
                        </h3>
                        <ul className="space-y-1 text-sm">
                          {t.metrics_before.HOMA_IR && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">HOMA-IR:</span>
                              <span className="font-semibold text-red-600">{t.metrics_before.HOMA_IR}</span>
                            </li>
                          )}
                          {t.metrics_before.BMI && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">BMI:</span>
                              <span className="font-semibold text-red-600">{t.metrics_before.BMI}</span>
                            </li>
                          )}
                          {t.metrics_before.HbA1c && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">HbA1c:</span>
                              <span className="font-semibold text-red-600">{t.metrics_before.HbA1c}%</span>
                            </li>
                          )}
                          {t.metrics_before.waist_cm && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">Waist:</span>
                              <span className="font-semibold text-red-600">{t.metrics_before.waist_cm} cm</span>
                            </li>
                          )}
                          {t.metrics_before.TyG && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">TyG:</span>
                              <span className="font-semibold text-red-600">{t.metrics_before.TyG}</span>
                            </li>
                          )}
                          {t.metrics_before.BP && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">BP:</span>
                              <span className="font-semibold text-red-600">{t.metrics_before.BP}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                        <h3 className="text-sm font-semibold text-green-800 mb-2 flex items-center">
                          <span className="mr-1">📈</span> After 90 Days
                        </h3>
                        <ul className="space-y-1 text-sm">
                          {t.metrics_after.HOMA_IR && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">HOMA-IR:</span>
                              <span className="font-semibold text-green-600">{t.metrics_after.HOMA_IR}</span>
                            </li>
                          )}
                          {t.metrics_after.BMI && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">BMI:</span>
                              <span className="font-semibold text-green-600">{t.metrics_after.BMI}</span>
                            </li>
                          )}
                          {t.metrics_after.HbA1c && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">HbA1c:</span>
                              <span className="font-semibold text-green-600">{t.metrics_after.HbA1c}%</span>
                            </li>
                          )}
                          {t.metrics_after.waist_cm && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">Waist:</span>
                              <span className="font-semibold text-green-600">{t.metrics_after.waist_cm} cm</span>
                            </li>
                          )}
                          {t.metrics_after.TyG && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">TyG:</span>
                              <span className="font-semibold text-green-600">{t.metrics_after.TyG}</span>
                            </li>
                          )}
                          {t.metrics_after.BP && (
                            <li className="flex justify-between">
                              <span className="text-gray-600">BP:</span>
                              <span className="font-semibold text-green-600">{t.metrics_after.BP}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎯 Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 500+ patients who have achieved metabolic remission with Dr. Muddu's 90-day program. 
            Track your HOMA-IR, TyG Index, BMI, and daily habits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              🚀 Start Your 90-Day Journey
            </Link>
            <a
              href="https://wa.me/919963721999?text=I saw the success stories and want to join the 90-day program"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              💬 WhatsApp Dr. Muddu
            </a>
          </div>
        </div>

        {/* Patient Photo Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 italic flex items-center justify-center gap-2">
            <span>🔒</span>
            <span>Patient identities protected. Avatars used for privacy. Testimonials shared with patient consent.</span>
          </p>
        </div>

        {/* Doctor Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              👨‍⚕️
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800">Dr. Muddu Surendra Nehru M.D.</h3>
              <p className="text-teal-600 font-medium">Professor of Medicine • Senior Physician</p>
              <p className="text-gray-600 mt-2 text-sm">
                With over 30+ years of clinical experience, Dr. Muddu pioneered the HOMA-IR based 
                metabolic remission approach. World's first physician to develop AI-based web app 
                for nutrition, health metrics, and drug trials.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <a 
                  href="https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full hover:bg-red-200 transition-colors"
                >
                  📺 YouTube
                </a>
                <a 
                  href="https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                  🌐 Website
                </a>
                <a 
                  href="https://instagram.com/homahealthcarecenter" 
                  target="_blank"
                  className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full hover:bg-pink-200 transition-colors"
                >
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

