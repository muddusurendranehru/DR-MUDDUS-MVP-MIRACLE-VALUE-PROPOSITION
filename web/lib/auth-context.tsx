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

  // Load token and user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Route protection is handled by Clerk middleware; no redirects here
  // so Clerk-signed-in users are not sent to /auth by old token check
  useEffect(() => {
    if (loading) return;
    const authRoute = '/auth';
    const isAuthRoute = pathname === authRoute;
    // Only redirect to dashboard if we have legacy token and user is on /auth
    if (token && isAuthRoute) {
      router.push('/dashboard');
    }
  }, [token, pathname, loading, router]);

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    
    // Store in both localStorage and sessionStorage
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    sessionStorage.setItem('token', newToken);
  };

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
