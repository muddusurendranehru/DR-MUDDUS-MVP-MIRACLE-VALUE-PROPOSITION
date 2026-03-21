'use client';

import React, { createContext, useContext } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  planTier?: string;
  packageName?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user: clerkUser, isLoaded } = useUser();
  const { signOut } = useClerk();

  const user: User | null = clerkUser
    ? {
        id: clerkUser.id,
        name: clerkUser.fullName || clerkUser.firstName || clerkUser.primaryEmailAddress?.emailAddress || 'User',
        email: clerkUser.primaryEmailAddress?.emailAddress || '',
        phone: (clerkUser as any).phoneNumber ?? undefined,
      }
    : null;

  const logout = () => {
    signOut({ redirectUrl: '/auth' });
  };

  const login = (_token: string, _user: User) => {
    // No-op: Clerk handles login. Kept for API compatibility with existing code.
  };

  const value: AuthContextType = {
    user,
    token: null,
    login,
    logout,
    isAuthenticated: !!user,
    loading: !isLoaded,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
