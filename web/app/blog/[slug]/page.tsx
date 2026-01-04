import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ✅ Force static generation for SEO
export const dynamic = 'force-static';

// Define blog posts data
const blogPosts: Record<string, { title: string; description: string; content: string }> = {
  'can-prediabetes-be-reversed-in-90-days': {
    title: 'Can Prediabetes Be Reversed in 90 Days? | Dr. Muddu Surendra Nehru, MD',
    description: 'Evidence-based protocol to reverse prediabetes in 90 days. Led by Professor Dr. Muddu Surendra Nehru, MD in Gachibowli, Hyderabad.',
    content: 'Yes — with our evidence-based 90-day protocol, led by Professor Dr. Muddu Surendra Nehru, MD. Our program focuses on metabolic root causes, personalized nutrition, and real-time monitoring to reverse prediabetes before it progresses to full diabetes.',
  },
  'insulin-resistance-kidney-link': {
    title: 'Insulin Resistance and Kidney Disease Link | Dr. Muddu Surendra Nehru, MD',
    description: 'Understanding the connection between insulin resistance and kidney disease. Evidence-based treatment at HOMA Clinic, Gachibowli, Hyderabad.',
    content: 'Insulin resistance is a key driver of kidney disease. Our 90-day metabolic remission program addresses the root cause to protect kidney function and prevent diabetic nephropathy.',
  },
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {post.title.replace(' | Dr. Muddu Surendra Nehru, MD', '')}
        </h1>
        <p className="text-gray-700 mb-6">
          {post.content}
        </p>

        {/* Blog content */}
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            At HOMA Clinic in Gachibowli, Hyderabad, we use evidence-based protocols to address metabolic root causes. 
            Our 90-day program has achieved an 85% remission rate through personalized nutrition, lifestyle modifications, 
            and close monitoring of key metrics like HOMA-IR, HbA1c, and TyG Index.
          </p>
          <p className="text-gray-700 mb-4">
            Led by Professor Dr. Muddu Surendra Nehru, MD with 32+ years of clinical experience, our program focuses on 
            reversing insulin resistance — the underlying cause of prediabetes, diabetes, and metabolic syndrome.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/assessment"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Start Your Free Assessment
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

