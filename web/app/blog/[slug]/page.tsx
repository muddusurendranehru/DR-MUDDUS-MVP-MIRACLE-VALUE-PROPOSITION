import { getBlogPost, getAllBlogSlugs } from '@/lib/content';

export async function generateStaticParams() {
  return getAllBlogSlugs(); // returns [{ slug: 'my-first-post' }]
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
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
