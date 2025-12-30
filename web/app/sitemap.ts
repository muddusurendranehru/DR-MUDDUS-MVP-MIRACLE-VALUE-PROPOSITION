import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com';
  const now = new Date();
  
  return [
    // Core pages
    { url: `${baseUrl}/`, lastModified: now, priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/enroll`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/remission-program`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/assessment`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/dashboard`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/auth`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/diet`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/nutri-bot`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, priority: 0.5 },
    { url: `${baseUrl}/upgrade`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/onboarding-emails`, lastModified: now, priority: 0.5 },
    
    // Blog posts
    { url: `${baseUrl}/blog/can-prediabetes-be-reversed-in-90-days`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/blog/insulin-resistance-kidney-link`, lastModified: now, priority: 0.7 },
    // Add future blogs here
  ];
}
