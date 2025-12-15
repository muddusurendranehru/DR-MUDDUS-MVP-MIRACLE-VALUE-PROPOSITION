'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WelcomeBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user dismissed in this session
    const dismissed = sessionStorage.getItem('welcomeBotDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }
    // Show after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('welcomeBotDismissed', 'true'); // Only remembers for this session
  };

  const handleLinkClick = () => {
    // Auto-dismiss after clicking a link
    handleDismiss();
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999] animate-bounce-in">
      <div className="bg-white border border-teal-400 rounded-3xl p-3 shadow-lg relative" style={{ maxWidth: '180px' }}>
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-1 -right-1 bg-gray-400 hover:bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Greeting */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-lg">👋</span>
          <p className="text-xs font-semibold text-gray-700">Need help?</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-1 text-[11px]">
          <Link
            href="/pricing"
            onClick={handleLinkClick}
            className="flex items-center gap-1 text-green-600 hover:text-green-700 p-1 rounded-full hover:bg-green-50 transition-colors"
          >
            <span>💰</span>
            <span>Packages</span>
          </Link>
          
          <a
            href="https://youtube.com/@homasurendranehru"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors"
          >
            <span>▶️</span>
            <span>Videos</span>
          </a>
          
          <a
            href="https://wa.me/919963721999"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center gap-1 text-green-600 hover:text-green-700 p-1 rounded-full hover:bg-green-50 transition-colors"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

