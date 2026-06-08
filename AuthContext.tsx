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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [role, setRole] = useState<UserRole>(null);
  const router = useRouter();

  const login = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setUser({ name: selectedRole === 'teacher' ? 'Budi Guru' : 'Ahmad Siswa' });
    // Simulasi redirect berdasarkan role
    router.push(selectedRole === 'teacher' ? '/teacher' : '/dashboard');
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;