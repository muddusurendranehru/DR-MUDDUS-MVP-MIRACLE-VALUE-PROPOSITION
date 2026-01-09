'use client';

import { useState } from 'react';

export default function HOMACalculator() {
  const toolName = "HOMA-IR";
  const [fbs, setFbs] = useState('');
  const [insulin, setInsulin] = useState('');
  const [result, setResult] = useState<{ value: number; risk: string } | null>(null);

  const calculateHOMA = () => {
    const f = parseFloat(fbs);
    const i = parseFloat(insulin);
    if (isNaN(f) || isNaN(i) || f <= 0 || i <= 0) {
      alert('Please enter valid fasting values.');
      return;
    }
    const homa = (f * i) / 405;
    let risk = '';
    if (homa < 1.0) risk = 'Optimal (Low Risk)';
    else if (homa < 2.0) risk = 'Normal';
    else if (homa < 2.9) risk = 'Early Insulin Resistance';
    else risk = 'Significant Insulin Resistance – Consult Doctor';
    
    setResult({ value: parseFloat(homa.toFixed(2)), risk });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Free HOMA-IR Calculator</h1>
        <p className="text-gray-700 mb-6 text-center">
          Calculate your insulin resistance using fasting blood sugar and insulin.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Fasting Blood Sugar (mg/dL)</label>
              <input
                type="number"
                value={fbs}
                onChange={(e) => setFbs(e.target.value)}
                placeholder="e.g., 100"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Fasting Insulin (µIU/mL)</label>
              <input
                type="number"
                value={insulin}
                onChange={(e) => setInsulin(e.target.value)}
                placeholder="e.g., 12"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={calculateHOMA}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Calculate HOMA-IR
            </button>
          </div>

          {result && (
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-blue-300 text-center">
              <p className="text-4xl font-bold text-blue-700 mb-2">{result.value}</p>
              <p className="text-xl font-semibold text-gray-800 mb-4">{result.risk}</p>
              {result.value >= 2.9 && (
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
          <p><strong>Note:</strong> This tool is for educational purposes. Always consult Dr. Muddu Surendra Nehru, MD for interpretation.</p>
        </div>

        <div className="mt-6 text-center">
          <a href="/tools" className="text-blue-600 hover:underline">← Back to All Calculators</a>
        </div>
      </div>
    </div>
  );
}

