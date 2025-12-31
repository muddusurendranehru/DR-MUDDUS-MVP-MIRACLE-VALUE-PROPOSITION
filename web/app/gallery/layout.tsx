import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | HOMA Clinic - Dr. Muddu Nehru MD | Gachibowli',
  description: 'View photos of HOMA Clinic Gachibowli, Dr. Muddu Nehru with Chiranjeevi, before/after transformations, clinic exterior, and medical team. 30+ years of metabolic health excellence.',
  keywords: 'HOMA Clinic gallery, Dr Muddu Nehru photos, Chiranjeevi HOMA Clinic, diabetes clinic Gachibowli photos, before after diabetes reversal',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

