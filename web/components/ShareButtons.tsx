'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  pageUrl: string;
  pageTitle: string;
  pageDescription?: string;
}

export default function ShareButtons({ pageUrl, pageTitle, pageDescription = '' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.share === 'function') {
      try {
        await window.navigator.share({
          title: pageTitle,
          text: pageDescription || pageTitle,
          url: pageUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    }
  };

  // Check if Web Share API is available
  const canWebShare = typeof window !== 'undefined' && window.navigator && typeof window.navigator.share === 'function';

  const whatsappMessage = encodeURIComponent(`${pageTitle}\n\n${pageUrl}\n\nFree Metabolic Risk Check – No Cost, No Signup`);
  const emailSubject = encodeURIComponent(pageTitle);
  const emailBody = encodeURIComponent(`Check out this metabolic health resource:\n\n${pageDescription || pageTitle}\n\n${pageUrl}`);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${emailSubject}&body=${emailBody}`;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 border-2 border-blue-200 shadow-sm">
      <h3 className="font-bold text-blue-900 mb-4 text-lg">📤 Share This Page</h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a 
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          📧 Gmail
        </a>
        <a 
          href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
          className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          📨 Email
        </a>
        <a 
          href={`https://wa.me/?text=${whatsappMessage}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          📱 WhatsApp
        </a>
        <button 
          onClick={handleCopy}
          className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          {copied ? '✅ Copied!' : '🔗 Copy Link'}
        </button>
        {canWebShare && (
          <button 
            onClick={handleShare}
            className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold shadow-md hover:shadow-lg transition-all"
          >
            📲 Native Share
          </button>
        )}
      </div>
      <div className="mt-4 p-3 bg-white rounded border border-blue-200">
        <p className="text-xs text-gray-600 mb-1">Or copy this link:</p>
        <code className="text-xs text-blue-700 break-all">{pageUrl}</code>
      </div>
    </div>
  );
}
