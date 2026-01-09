'use client';

import { useState } from 'react';

export default function WHRCalculator() {
  const toolName = "Waist-to-Hip Ratio (WHR)";
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [result, setResult] = useState<{ value: number; risk: string } | null>(null);

  const calculateWHR = () => {
    const w = parseFloat(waist);
    const h = parseFloat(hips);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      alert('Please enter valid measurements in centimeters.');
      return;
    }
    const whr = w / h;
    let risk = '';
    if (gender === 'female') {
      if (whr < 0.80) risk = 'Low Risk';
      else if (whr < 0.85) risk = 'Moderate Risk';
      else risk = 'High Risk (PCOS, Heart Disease, Diabetes)';
    } else {
      if (whr < 0.90) risk = 'Low Risk';
      else if (whr < 0.95) risk = 'Moderate Risk';
      else risk = 'High Risk (Metabolic Syndrome)';
    }

    setResult({ value: parseFloat(whr.toFixed(2)), risk });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Free WHR Calculator</h1>
        <p className="text-gray-700 mb-6 text-center">
          Waist-to-Hip Ratio (WHR) reveals visceral fat distribution and hormonal risk — especially for PCOS and heart disease.
        </p>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border-2 border-teal-200">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Waist Circumference (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                placeholder="e.g., 88"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Hip Circumference (cm)</label>
              <input
                type="number"
                value={hips}
                onChange={(e) => setHips(e.target.value)}
                placeholder="e.g., 100"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Gender</label>
              <div className="flex space-x-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    className="w-4 h-4 text-teal-600"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    className="w-4 h-4 text-teal-600"
                  />
                  <span>Male</span>
                </label>
              </div>
            </div>
            <button
              onClick={calculateWHR}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Calculate WHR
            </button>
          </div>

          {result && (
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-teal-300 text-center">
              <p className="text-4xl font-bold text-teal-700 mb-2">{result.value}</p>
              <p className="text-xl font-semibold text-gray-800 mb-4">{result.risk}</p>
              {(result.value >= (gender === 'female' ? 0.85 : 0.95)) && (
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left">
                  <p className="text-gray-800">
                    Your <strong>{toolName}</strong> result suggests elevated metabolic risk.
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Next step:</strong> Get a <span className="text-green-600 font-medium">free 15-minute consultation</span>  
                    with <strong>Dr. Muddu Surendra Nehru, MD</strong> (32+ years) to understand your personalized remission plan.
                  </p>
                  <a 
                    href="https://wa.me/919963721999?text=Assessment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
                  >
                    WhatsApp 'Assessment' Now
                  </a>
                  <p className="mt-3 text-xs text-gray-500">
                    No cost. No obligation. Available in English & Telugu.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <p><strong>Note:</strong> Measure waist at narrowest point, hips at widest. WHO risk thresholds apply.</p>
        </div>

        <div className="mt-6 text-center">
          <a href="/tools" className="text-teal-600 hover:underline">← Back to All Calculators</a>
        </div>
      </div>
    </div>
  );
}

