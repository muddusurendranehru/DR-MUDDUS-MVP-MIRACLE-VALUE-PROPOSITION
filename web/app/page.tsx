import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Reverse Metabolic Disease in 90 Days
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          India's first precision platform for HOMA-IR reduction, waist circumference reversal, and cardiovascular risk lowering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth"
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors"
          >
            Start Your Assessment
          </Link>
          <Link
            href="/auth"
            className="px-8 py-3 bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium rounded-md transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
