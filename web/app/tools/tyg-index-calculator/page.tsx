'use client';

import { useState } from 'react';

/** TyG Index interpretation: Ln-based scale (typical range ~8–10). */
const getTyGInterpretation = (tyg: number) => {
  if (tyg < 8.5) {
    return {
      category: 'Normal',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      message: 'Your TyG Index is within the normal range. Good insulin sensitivity.',
      risk: 'Low Risk',
    };
  } else if (tyg >= 8.5 && tyg < 9.0) {
    return {
      category: 'Borderline',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      message: 'Your TyG Index suggests borderline insulin resistance. Lifestyle review recommended.',
      risk: 'Moderate Risk',
    };
  } else {
    return {
      category: 'High Risk of Insulin Resistance & Cardiovascular Disease',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      message: 'Your TyG Index suggests significant insulin resistance. Medical consultation advised.',
      risk: 'High Risk',
    };
  }
};

export default function TyGCalculator() {
  const toolName = 'TyG Index';
  const [triglycerides, setTriglycerides] = useState('');
  const [glucose, setGlucose] = useState('');
  const [result, setResult] = useState<{ value: number; interpretation: ReturnType<typeof getTyGInterpretation> } | null>(null);

  const calculateTyG = () => {
    const t = parseFloat(triglycerides);
    const g = parseFloat(glucose);
    if (isNaN(t) || isNaN(g) || t <= 0 || g <= 0) {
      alert('Please enter valid fasting triglycerides and glucose values.');
      return;
    }
    const tyg = Math.log((t * g) / 2);
    const value = parseFloat(tyg.toFixed(2));
    setResult({ value, interpretation: getTyGInterpretation(value) });
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
              <p className={`text-xl font-semibold mb-2 ${result.interpretation.color}`}>
                {result.interpretation.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">{result.interpretation.risk}</p>
              <div className={`mt-4 p-4 rounded-lg text-left ${result.interpretation.bgColor}`}>
                <p className="text-gray-800">{result.interpretation.message}</p>
              </div>
              {result.value >= 9.0 && (
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left">
                  <p className="text-gray-800">
                    Your <strong>{toolName}</strong> result suggests elevated metabolic risk.
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Next step:</strong> Get a <span className="text-green-600 font-medium">free 15-minute consultation</span>{' '}
                    with <strong>Dr. Muddu Surendra Nehru, MD</strong> (32+ years) to understand your personalized remission plan.
                  </p>
                  <a
                    href="https://wa.me/919963721999?text=Assessment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
                  >
                    WhatsApp &apos;Assessment&apos; Now
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

