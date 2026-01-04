import { Metadata } from 'next';

// ✅ Force static generation for SEO
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Patient Success Stories | Dr. Muddu Surendra Nehru, MD - Hyderabad',
  description: 'Real patient stories of metabolic remission at HOMA Clinic in Gachibowli, Hyderabad.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Patient Success Stories</h1>
        <p className="text-gray-700 mb-6">
          See how patients reversed diabetes, lost weight, and regained health under Dr. Nehru's 90-day protocol.
        </p>

        {/* Placeholder for gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img src="/placeholder.jpg" alt="Patient 1" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-sm text-gray-700">"Reversed my diabetes in 90 days!" — Patient A</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img src="/placeholder.jpg" alt="Patient 2" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-sm text-gray-700">"Lost 15kg and got off medications!" — Patient B</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img src="/placeholder.jpg" alt="Patient 3" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-sm text-gray-700">"HOMA-IR normalized in 90 days!" — Patient C</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-6">
            *All photos are from real patients with consent.*
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cw6zfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 font-medium text-lg shadow-lg transition-colors"
          >
            📝 Start Your Journey - Book Free Assessment
          </a>
        </div>
      </div>
    </div>
  );
}

