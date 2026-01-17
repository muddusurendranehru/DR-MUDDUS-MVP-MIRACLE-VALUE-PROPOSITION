'use client';

import { useState } from 'react';

export default function ShareButtons({ pageUrl, pageTitle, pageDescription }: { 
  pageUrl: string; 
  pageTitle: string; 
  pageDescription?: string; 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pageTitle,
        text: pageDescription || 'Check out this metabolic health resource',
        url: pageUrl,
      });
    }
  };

  const whatsappMessage = encodeURIComponent(`${pageTitle}\n\n${pageUrl}\n\nFree Metabolic Risk Check – No Cost, No Signup`);
  const emailSubject = encodeURIComponent(pageTitle);
  const emailBody = encodeURIComponent(`Check out this metabolic health resource:\n\n${pageUrl}`);

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {/* Gmail */}
      <a 
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=&su=${emailSubject}&body=${emailBody}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold shadow-md hover:shadow-lg transition-all"
      >
        📧 Gmail
      </a>

      {/* WhatsApp */}
      <a 
        href={`https://wa.me/?text=${whatsappMessage}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition-all"
      >
        💬 WhatsApp
      </a>

      {/* Copy Link */}
      <button 
        onClick={handleCopy}
        className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold shadow-md hover:shadow-lg transition-all"
      >
        {copied ? '✅ Copied!' : '🔗 Copy Link'}
      </button>

      {/* Native Share (Mobile) */}
      {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
        <button 
          onClick={handleShare}
          className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          📲 Native Share
        </button>
      )}
    </div>
  );
}
