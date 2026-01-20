'use client';

import { useEffect, useState } from 'react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Use actual URL in browser (not during SSR)
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const shareText = encodeURIComponent(`${title} – Free metabolic health tool by Dr. Muddu Surendra Nehru, MD`);
  const shareUrl = encodeURIComponent(url);

  const shares = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      aria: 'Share on WhatsApp'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
      aria: 'Share on Telegram'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      aria: 'Share on Facebook'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      aria: 'Share on Twitter'
    },
    {
      name: 'Gmail',
      icon: '✉️',
      url: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(title)}&body=${shareUrl}`,
      aria: 'Share via Gmail'
    }
  ];

  return (
    <div className="my-6 flex flex-wrap gap-3 justify-center">
      {shares.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.aria}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-50 transition-all shadow-sm hover:shadow-md text-lg"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
