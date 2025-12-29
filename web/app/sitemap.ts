// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com';
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/blog/can-prediabetes-be-reversed-in-90-days`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/blog/insulin-resistance-kidney-link`,
      lastModified: now,
    },
  ];
}
