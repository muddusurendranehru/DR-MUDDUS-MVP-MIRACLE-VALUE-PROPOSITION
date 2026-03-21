'use client';

import { SignIn, SignUp } from '@clerk/nextjs';
import { useState } from 'react';
import Link from 'next/link';

const homaAppearance = {
  variables: {
    colorPrimary: '#0d9488',
    colorBackground: '#0f172a',
    colorInputBackground: '#1e293b',
    colorInputText: '#f8fafc',
    colorText: '#f1f5f9',
    colorTextSecondary: '#94a3b8',
    borderRadius: '0.75rem',
  },
  elements: {
    formButtonPrimary: 'bg-teal-600 hover:bg-teal-500 text-white',
    card: 'bg-slate-800/95 shadow-xl border border-slate-700',
    headerTitle: 'text-slate-100',
    headerSubtitle: 'text-slate-400',
    socialButtonsBlockButton: 'bg-slate-700 border-slate-600 text-slate-100 hover:bg-slate-600',
    formFieldInput: 'bg-slate-700 border-slate-600 text-slate-100',
    formFieldLabel: 'text-slate-300',
    footerActionLink: 'text-teal-400 hover:text-teal-300',
  },
};

export default function AuthPage() {
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              🩺 HOMA Clinic
            </div>
          </Link>
          <p className="text-teal-200/90">Metabolic Remission Platform</p>
          <p className="text-sm text-slate-400 mt-1">Dr. Muddu Surendra Nehru</p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-t-xl overflow-hidden mb-0 border-b border-slate-600">
          <button
            type="button"
            onClick={() => setMode('sign-in')}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              mode === 'sign-in'
                ? 'bg-slate-800 text-teal-400 border-b-2 border-teal-500'
                : 'bg-slate-800/70 text-slate-400 hover:text-slate-300'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode('sign-up')}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              mode === 'sign-up'
                ? 'bg-slate-800 text-teal-400 border-b-2 border-teal-500'
                : 'bg-slate-800/70 text-slate-400 hover:text-slate-300'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Clerk components */}
        <div className="bg-slate-800/95 rounded-b-xl rounded-t-none shadow-xl border border-t-0 border-slate-700 p-6">
          {mode === 'sign-in' && (
            <SignIn
              appearance={homaAppearance}
              signUpUrl="/auth"
              forceRedirectUrl="/dashboard"
            />
          )}
          {mode === 'sign-up' && (
            <SignUp
              appearance={homaAppearance}
              signInUrl="/auth"
              forceRedirectUrl="/dashboard"
            />
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-teal-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
