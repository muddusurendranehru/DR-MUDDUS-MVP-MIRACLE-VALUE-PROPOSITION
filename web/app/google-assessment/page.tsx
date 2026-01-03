import { Metadata } from 'next';
import LeadScoringForm from '@/components/LeadScoringForm';

export const metadata: Metadata = {
  title: 'Free Metabolic Assessment | Dr. Muddu Surendra Nehru, MD - Gachibowli, Hyderabad',
  description: 'Take our free metabolic assessment to evaluate your risk for diabetes, insulin resistance, and metabolic syndrome. Get personalized insights from Dr. Muddu Surendra Nehru, MD.',
};

export default function GoogleAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Metabolic Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evaluate your metabolic health risk in just 5 minutes. Get personalized insights and recommendations from Dr. Muddu Surendra Nehru, MD.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LeadScoringForm />
      </div>
    </div>
  );
}

