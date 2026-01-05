import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metabolic Health Calculators | Dr. Muddu Surendra Nehru, MD - Hyderabad',
  description: 'Calculate your BMI, HOMA-IR, and triglyceride-glucose index with our free online tools.',
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Metabolic Health Calculators</h1>
        <p className="text-gray-700 mb-6">
          Use our free tools to assess your metabolic health risk.
        </p>

        {/* BMI Calculator */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">BMI Calculator</h2>
          <p className="mb-4">
            Enter your height and weight to calculate your Body Mass Index.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            Calculate BMI
          </button>
        </div>

        {/* HOMA-IR Calculator */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">HOMA-IR Calculator</h2>
          <p className="mb-4">
            Enter your fasting glucose and insulin levels to calculate your insulin resistance.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            Calculate HOMA-IR
          </button>
        </div>

        {/* Triglyceride-Glucose Index */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Triglyceride-Glucose Index</h2>
          <p className="mb-4">
            Enter your triglycerides and fasting glucose to assess your metabolic risk.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            Calculate TyG Index
          </button>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="/assessment"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 font-medium transition-colors"
          >
            📝 Start Your Full Metabolic Risk Assessment
          </a>
        </div>
      </div>
    </div>
  );
}

