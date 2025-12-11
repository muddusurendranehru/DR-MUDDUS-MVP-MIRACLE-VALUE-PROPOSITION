'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/pricing', label: 'Packages', icon: '💰' },
  { href: '/blog', label: 'Blog', icon: '📝' },
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/nutri-bot', label: 'NutriBot AI', icon: '🤖' },
  { href: '/assessment', label: 'Assessment', icon: '📋' },
  { href: '/remission-program', label: '90-Day Program', icon: '🎯' },
  { href: '/testimonials', label: 'Success Stories', icon: '🏆' },
  { href: '/enroll', label: 'Enroll', icon: '✨' },
  { href: '/auth', label: 'Login', icon: '🔐' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-16 right-4 z-[60] p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-lg transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          // X icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[50]"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 z-[55] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-4 pt-6">
          <h2 className="text-white font-bold text-lg">🩺 HOMA Clinic</h2>
          <p className="text-teal-100 text-xs mt-1">Dr. Muddu's Metabolic Care</p>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 pb-32">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === link.href
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions - Fixed at bottom */}
        <div className="fixed bottom-0 right-0 w-72 p-4 bg-gray-900 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/919963721999"
              target="_blank"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+919963721999"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              📞 Call
            </a>
          </div>
          <p className="text-center text-gray-500 text-xs mt-2">
            09963721999
          </p>
        </div>
      </div>
    </>
  );
}

