'use client';
import { SignIn, SignUp } from '@clerk/nextjs';
import { useState } from 'react';

export default function AuthPage() {
  const [tab, setTab] = useState('signin');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <button
          onClick={() => setTab('signin')}
          style={{ padding: '10px 24px', background: tab === 'signin' ? '#2563eb' : '#374151', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Sign In
        </button>
        <button
          onClick={() => setTab('signup')}
          style={{ padding: '10px 24px', background: tab === 'signup' ? '#2563eb' : '#374151', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Create Account
        </button>
      </div>
      {tab === 'signin' ? <SignIn /> : <SignUp />}
    </div>
  );
}
