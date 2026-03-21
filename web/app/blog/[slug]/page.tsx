import type { Metadata } from 'next';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import { getBlogPost, getAllBlogSlugs } from '@/lib/content';
import BlogLayout from '@/components/BlogLayout';

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export const dynamicParams = true;

type DbPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author: string | null;
  category: string | null;
  icon: string | null;
  meta_description: string | null;
  date: string | null;
  created_at?: string | null;
};

async function getDbPost(slug: string): Promise<DbPost | null> {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3004';
    const url = `${base.replace(/\/$/, '')}/api/admin/blog?slug=${encodeURIComponent(slug)}`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = (await res.json()) as { post?: DbPost | null };
    return data.post ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dbPost = await getDbPost(slug);
  if (dbPost) {
    return {
      title: `${dbPost.title} | HOMA Clinic`,
      description: dbPost.meta_description ?? dbPost.excerpt ?? undefined,
    };
  }
  const post = await getBlogPost(slug);
  if (!post) {
    return { title: 'Post not found | HOMA Clinic' };
  }
  return {
    title: `${post.title} | HOMA Clinic`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dbPost = await getDbPost(slug);

  if (dbPost) {
    const processed = await remark().use(html).process(dbPost.content);
    const htmlContent = processed.toString();
    const displayDate =
      (typeof dbPost.date === 'string' && dbPost.date.trim()) ||
      (dbPost.created_at
        ? new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(
            new Date(dbPost.created_at)
          )
        : '');
    const authorLine = [dbPost.author, displayDate].filter(Boolean).join(' | ');

    return (
      <BlogLayout>
        <article className="max-w-3xl mx-auto px-4 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 font-medium hover:text-green-700 mb-6"
          >
            ← Back to blog
          </Link>

          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
            {dbPost.category ?? 'Blog'}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{dbPost.title}</h1>
          {authorLine ? (
            <p className="text-sm text-gray-500 mb-8">{authorLine}</p>
          ) : null}

          <div
            className="max-w-none text-gray-800 leading-relaxed space-y-4 mb-12 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-6"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <footer className="border-t border-gray-200 pt-8 text-sm text-gray-600 space-y-2">
            <p className="font-medium text-gray-800">
              Dr Muddu Surendra Nehru MD | HOMA Healthcare Center | Gachibowli | 09963721999
            </p>
            <p>
              <a href="https://homahealthcarecenter.in" className="text-teal-600 hover:underline">
                homahealthcarecenter.in
              </a>
            </p>
          </footer>
        </article>
      </BlogLayout>
    );
  }

  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1>Post Not Found</h1>
        <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </div>
  );
}
