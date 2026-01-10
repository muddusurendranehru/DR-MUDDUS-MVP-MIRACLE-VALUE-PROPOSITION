'use client';

import { useState } from 'react';

export default function TyGCalculator() {
  const toolName = "TyG Index";
  const [triglycerides, setTriglycerides] = useState('');
  const [glucose, setGlucose] = useState('');
  const [result, setResult] = useState<{ value: number; risk: string } | null>(null);

  const calculateTyG = () => {
    const t = parseFloat(triglycerides);
    const g = parseFloat(glucose);
    if (isNaN(t) || isNaN(g) || t <= 0 || g <= 0) {
      alert('Please enter valid fasting triglycerides and glucose values.');
      return;
    }
    const tyg = Math.log((t * g) / 2);
    let risk = '';
    if (tyg < 4.5) risk = 'Low Risk';
    else if (tyg < 5.0) risk = 'Moderate Risk';
    else risk = 'High Risk of Insulin Resistance & Cardiovascular Disease';

    setResult({ value: parseFloat(tyg.toFixed(2)), risk });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Free TyG Index Calculator</h1>
        <p className="text-gray-700 mb-6 text-center">
          The TyG Index predicts insulin resistance and early heart disease risk using fasting triglycerides and glucose.
        </p>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Fasting Triglycerides (mg/dL)</label>
              <input
                type="number"
                value={triglycerides}
                onChange={(e) => setTriglycerides(e.target.value)}
                placeholder="e.g., 150"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Fasting Glucose (mg/dL)</label>
              <input
                type="number"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                placeholder="e.g., 100"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <button
              onClick={calculateTyG}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Calculate TyG Index
            </button>
          </div>

          {result && (
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-purple-300 text-center">
              <p className="text-4xl font-bold text-purple-700 mb-2">{result.value}</p>
              <p className="text-xl font-semibold text-gray-800 mb-4">{result.risk}</p>
              {result.value >= 5.0 && (
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
          <p><strong>Note:</strong> TyG Index = Ln[(Triglycerides × Glucose) / 2]. Developed by Dr. Muddu Surendra Nehru, MD for early metabolic risk detection.</p>
        </div>

        <div className="mt-6 text-center">
          <a href="/tools" className="text-purple-600 hover:underline">← Back to All Calculators</a>
        </div>
      </div>
    </div>
  );
}

