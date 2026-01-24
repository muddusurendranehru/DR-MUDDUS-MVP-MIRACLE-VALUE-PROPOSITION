'use client';

import { useEffect, useState } from 'react';

type ShareButtonsProps = {
  // Make ALL props optional for backward compatibility
  url?: string;
  title?: string;
  description?: string;
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
};

const ShareButtons: React.FC<ShareButtonsProps> = (props) => {
  // Extract new props with fallback to legacy props OR default
  const title = props.title || props.pageTitle || 'HOMA Health Clinics';
  const url = props.url || props.pageUrl;
  const description = props.description || props.pageDescription;

  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Use actual URL in browser (not during SSR)
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Use provided URL or auto-detected URL
  const shareUrl = url || currentUrl;

  const shareText = encodeURIComponent(`${title} – Free metabolic health tool by Dr. Muddu Surendra Nehru, MD`);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shares = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
      aria: 'Share on WhatsApp'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
      aria: 'Share on Telegram'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      aria: 'Share on Facebook'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`,
      aria: 'Share on Twitter'
    },
    {
      name: 'Gmail',
      icon: '✉️',
      url: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(title)}&body=${encodedUrl}`,
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
};

export default ShareButtons;
