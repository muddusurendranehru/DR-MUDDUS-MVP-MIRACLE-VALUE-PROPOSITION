// app/sitemap.ts
import { MetadataRoute } from 'next';

const BLOG_POSTS = [
  'can-prediabetes-be-reversed-in-90-days',
  'insulin-resistance-kidney-link',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com';
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    ...BLOG_POSTS.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
    })),
  ];
}
