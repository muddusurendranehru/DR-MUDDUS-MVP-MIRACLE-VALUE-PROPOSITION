import { Metadata } from 'next';

// ✅ Force static generation for SEO
export const dynamic = 'force-static';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${title} | Dr. Muddu Surendra Nehru, MD - HOMA Clinic`,
    description: `Evidence-based insights on metabolic health, insulin resistance, and remission protocols by Professor Dr. Muddu Surendra Nehru, MD.`,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </h1>
        <p className="text-gray-700 mb-6">
          This is a placeholder for the blog post: <strong>{slug}</strong>.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="font-bold text-green-800 mb-2">Free Metabolic Risk Assessment</h2>
          <p className="text-gray-700 mb-4">
            Start your journey to remission with a 15-minute assessment by Dr. Nehru's team.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4cw6zfm3ZDC7x1aCc7nGFNMRqpd14eogHWa91gj6jRFPXXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 font-medium"
          >
            📝 Book Your Free Assessment
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Dr. Muddu Surendra Nehru, MD | Metabolic Health Clinic | Gachibowli, Hyderabad, Telangana</p>
        </div>
      </div>
    </div>
  );
}
