'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type UserRole = 'student' | 'teacher' | null;

interface AuthContextType {
  user: any | null;
  role: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [role, setRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Load from localStorage on initial mount
    const storedUser = localStorage.getItem('lms_user');
    const storedRole = localStorage.getItem('lms_role') as UserRole;
    if (storedUser && storedRole) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
    }
    setIsLoading(false);
  }, []);

  const login = (selectedRole: UserRole) => {
    setRole(selectedRole);
    const userData = { name: selectedRole === 'teacher' ? 'Budi Guru' : 'Ahmad Siswa' };
    setUser(userData);
    localStorage.setItem('lms_user', JSON.stringify(userData));
    localStorage.setItem('lms_role', selectedRole);
    // Simulasi redirect berdasarkan role
    router.push(selectedRole === 'teacher' ? '/teacher' : '/dashboard');
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem('lms_user');
    localStorage.removeItem('lms_role');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout, isAuthenticated: !!user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;