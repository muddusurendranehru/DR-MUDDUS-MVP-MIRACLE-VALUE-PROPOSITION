import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Metabolic Risk Check – No Cost, No Signup | Dr. Muddu Surendra Nehru MD - Gachibowli',
  description: 'Get your free HOMA-IR report in 2 minutes. Struggling with belly fat or fatigue? Use Dr. Muddu Surendra Nehru MD Miracle Methods metabolic calculators. No signup required. Trusted by ISB, IIIT visitors near IKEA Gachibowli.',
  keywords: 'free HOMA-IR test Gachibowli, metabolic risk check Hyderabad, Dr Muddu Surendra Nehru MD calculator, belly fat calculator Gachibowli, insulin resistance test free, metabolic assessment ISB',
};

interface ConditionCard {
  title: string;
  description: string;
  icon: string;
  href: string;
}

const conditionCards: ConditionCard[] = [
  {
    title: 'PCOS & Unexplained Weight Gain',
    description: 'Reverse it naturally',
    icon: '🩺',
    href: '/conditions/pcos-unexplained-weight-gain',
  },
  {
    title: 'Tired at 60+? Not Just Aging',
    description: 'Fix fatigue in 90 days',
    icon: '👴',
    href: '/conditions/tired-at-60-not-just-aging',
  },
  {
    title: 'Belly Fat Won\'t Go Away?',
    description: 'Target visceral fat risk now',
    icon: '⚖️',
    href: '/conditions/belly-fat-wont-go-away',
  },
  {
    title: 'Sugar Normal But High Risk?',
    description: 'Prevent diabetes before it starts',
    icon: '🛡️',
    href: '/conditions/sugar-normal-high-risk',
  },
  {
    title: 'Diabetes + Swelling in Legs?',
    description: 'Stop diabetic nephropathy now',
    icon: '✅',
    href: '/conditions/diabetes-swelling-in-legs',
  },
  {
    title: 'Family History of Heart Attack?',
    description: 'Break the cycle of insulin resistance',
    icon: '❤️',
    href: '/conditions/family-heart-attack-diabetes',
  },
  {
    title: 'High BP + Diabetes?',
    description: 'Manage both with one protocol',
    icon: '🩺',
    href: '/conditions/high-bp-diabetes-treatment',
  },
  {
    title: 'Retired but Always Tired?',
    description: 'Restore energy with age-tailored nutrition',
    icon: '🏖️',
    href: '/conditions/retired-always-tired',
  },
  {
    title: 'Screen Your Whole Family',
    description: 'Early detection saves lives',
    icon: '👨‍👩‍👧',
    href: '/conditions/family-metabolic-screening',
  },
  {
    title: 'Always Exhausted? Even After Sleep?',
    description: 'Fix root cause in 90 days',
    icon: '💡',
    href: '/conditions/always-exhausted-even-after-sleep',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Free Metabolic Risk Check – No Cost, No Signup
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-semibold max-w-3xl mx-auto">
            Struggling with belly fat or fatigue? Get your free HOMA-IR report in 2 minutes.
          </p>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            <strong>Dr. Muddu Surendra Nehru MD Miracle Methods Gachibowli</strong> — 
            Trusted by visitors to ISB, IIIT, and professionals near IKEA Gachibowli. 
            Appreciated by Megastar Chiranjeevi.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="bg-white/20 px-4 py-2 rounded-full">⭐ Trusted by ISB Visitors</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎓 IIIT Gachibowli</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🏪 Near IKEA Gachibowli</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🌟 Megastar Chiranjeevi</span>
          </div>
        </div>
      </div>

      {/* Condition Tiles Section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose Your Condition — Get Personalized Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {conditionCards.map((card, index) => {
              // Generate UTM parameters from condition slug
              const slug = card.href.replace('/conditions/', '').replace(/-/g, '_');
              const utmHref = `${card.href}?utm_source=tools_page&utm_medium=condition_tile&utm_campaign=${slug}`;
              
              return (
                <Link
                  key={index}
                  href={utmHref}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-400 p-6 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Calculators Section - Bigger and Bolder */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Metabolic Calculators
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Use our free tools to assess your metabolic health risk. No signup required.
          </p>
        </div>

        {/* BMI Calculator - Bigger and Bolder with Usage Stats */}
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 md:p-10 rounded-2xl mb-8 border-4 border-green-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-6xl">⚖️</span>
              <span className="text-3xl">🍎</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-green-900">BMI Lies — Here&apos;s Your Real Risk</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Traditional BMI doesn&apos;t tell the full story. Enter your height and weight to calculate your Body Mass Index and understand your real metabolic risk.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              📊 Used by 10,000+ patients since 2020. Free. No signup needed.
            </p>
            <Link href="/tools/bmi-calculator" className="inline-block bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-colors font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculate BMI →
            </Link>
          </div>
        </div>

        {/* HOMA-IR Calculator - Bigger and Bolder with Usage Stats */}
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 md:p-10 rounded-2xl mb-8 border-4 border-blue-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-6xl">🔋</span>
              <span className="text-3xl">📊</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900">Why You&apos;re Always Tired Tool</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Always tired? Even after sleep? It might be insulin resistance (your body fighting itself). 
              Enter your fasting glucose and insulin levels to calculate your HOMA-IR and see if insulin resistance is draining your energy.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              📊 Used by 10,000+ patients since 2020. Based on 500,000+ tests since 2000. Free. No signup needed.
            </p>
            <Link href="/tools/homa-ir-calculator" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-colors font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculate HOMA-IR →
            </Link>
          </div>
        </div>

        {/* Triglyceride-Glucose Index - Bigger and Bolder with Usage Stats */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 md:p-10 rounded-2xl mb-8 border-4 border-purple-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-6xl">❤️</span>
              <span className="text-3xl">📊</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-purple-900">Heart Attack Risk Before 60 Checker</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Worried about heart disease? Enter your triglycerides (fat in blood) and fasting glucose to see your heart attack risk. 
              This test (TyG Index) is used by doctors worldwide. It shows risk even when other tests look normal.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              📊 Used by 10,000+ patients since 2020. Based on research from 500,000+ patients. Free. No signup needed.
            </p>
            <Link href="/tools/tyg-index-calculator" className="inline-block bg-purple-600 text-white px-10 py-4 rounded-full hover:bg-purple-700 transition-colors font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculate TyG Index →
            </Link>
          </div>
        </div>

        {/* Waist Circumference - Bigger and Bolder with Usage Stats */}
        <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 md:p-10 rounded-2xl mb-8 border-4 border-orange-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-6xl">📏</span>
              <span className="text-3xl">⚖️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-orange-900">Belly Fat Danger Zone Meter</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Is your waist size dangerous? Enter your waist circumference (measure around your belly button) to see if you&apos;re in the danger zone. 
              Big waist = high risk of heart attack and diabetes.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              📊 Used by 10,000+ patients since 2020. Based on research from 500,000+ patients. Free. No signup needed.
            </p>
            <Link href="/tools/waist-circumference" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-full hover:bg-orange-700 transition-colors font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Check Waist Size →
            </Link>
          </div>
        </div>

        {/* WHtR Calculator - Bigger and Bolder with Usage Stats */}
        <div className="bg-gradient-to-br from-indigo-100 to-violet-100 p-8 md:p-10 rounded-2xl mb-8 border-4 border-indigo-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-6xl">📐</span>
              <span className="text-3xl">📏</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-indigo-900">Is Your Waist Size Dangerous? Test</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Waist-to-Height Ratio (WHtR) is better than BMI. It compares your waist size to your height. 
              If your waist is more than half your height, you&apos;re at risk. This test is more accurate than BMI.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              📊 Used by 10,000+ patients since 2020. Research shows this is more accurate than BMI. Free. No signup needed.
            </p>
            <Link href="/tools/whtr-calculator" className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-full hover:bg-indigo-700 transition-colors font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculate WHtR →
            </Link>
          </div>
        </div>

        {/* WHR Calculator - Bigger and Bolder with Usage Stats */}
        <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 md:p-10 rounded-2xl mb-8 border-4 border-pink-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-6xl">🎯</span>
              <span className="text-3xl">💗</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-900">Hormonal Fat Distribution Analyzer</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Where your body stores fat matters. If you store fat around your waist (apple shape), it&apos;s more dangerous than storing it around your hips (pear shape). 
              This test (Waist-to-Hip Ratio) shows if your fat pattern means trouble.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              📊 Used by 10,000+ patients since 2020. Important for PCOS and hormonal issues. Free. No signup needed.
            </p>
            <Link href="/tools/whr-calculator" className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full hover:bg-pink-700 transition-colors font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Calculate WHR →
            </Link>
          </div>
        </div>

        {/* CTA Section - Updated Branding */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-50 to-indigo-50 p-12 rounded-2xl border-4 border-purple-300 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            Ready for Full Metabolic Remission?
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            <strong>Dr. Muddu Surendra Nehru MD Miracle Methods Gachibowli</strong> — 
            Get your personalized 90-day protocol with daily coaching, lab monitoring, and WhatsApp support.
          </p>
          <p className="text-sm text-gray-600 mb-6 italic">
            Trusted by visitors to ISB, IIIT, and professionals near IKEA Gachibowli. 
            Appreciated by Megastar Chiranjeevi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/assessment"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📝 Start Your Free Assessment
            </a>
            <a
              href="https://wa.me/919963721999?text=Free%20Metabolic%20Risk%20Check"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

