'use client';

import { useAuth } from '@/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'student' | 'teacher';
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, role, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.push('/login');
    } else if (requiredRole && role !== requiredRole) {
      // Jika role tidak sesuai, lempar ke dashboard masing-masing
      router.push(role === 'teacher' ? '/teacher' : '/dashboard');
    }
  }, [isAuthenticated, role, router, requiredRole, isLoading]);

  // Tampilkan loading screen sederhana saat mengecek status atau jika tidak berhak
  if (isLoading || !isAuthenticated || (requiredRole && role !== requiredRole)) {
    return <div className="flex items-center justify-center h-screen">Memverifikasi akses...</div>;
  }

  return <>{children}</>;
}