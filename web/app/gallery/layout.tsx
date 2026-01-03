import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | HOMA Clinic - Dr. Muddu Nehru MD | Best Diabetologist Gachibowli',
  description: 'View photos of HOMA Clinic Gachibowli featuring Dr. Muddu Surendra Nehru MD with Chiranjeevi VIP patient, before/after diabetes reversal transformations, medical camps, HOMA-IR test results, and clinic facilities. Best diabetologist Gachibowli with 30+ years experience, 85% remission rate.',
  keywords: 'HOMA Clinic gallery, Dr Muddu Nehru photos, Chiranjeevi HOMA Clinic, diabetes clinic Gachibowli photos, before after diabetes reversal, diabetologist Gachibowli, HOMA-IR reversal Hyderabad, prediabetes reversal Gachibowli, 90 day diabetes remission program',
  openGraph: {
    title: 'HOMA Clinic Gallery - Dr. Muddu Nehru MD | Gachibowli',
    description: 'Gallery featuring celebrity patient Chiranjeevi, before/after transformations, and HOMA Clinic facilities. Best diabetologist Gachibowli.',
    url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/gallery',
    siteName: 'HOMA Clinic',
    images: [
      {
        url: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/dr-muddu-chiranjeevi.jpg.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Muddu Nehru with Chiranjeevi - HOMA Clinic Gachibowli',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOMA Clinic Gallery - Dr. Muddu Nehru MD',
    description: 'Gallery featuring celebrity patient Chiranjeevi and diabetes reversal transformations.',
    images: ['https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/images/dr-muddu-chiranjeevi.jpg.jpg'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

