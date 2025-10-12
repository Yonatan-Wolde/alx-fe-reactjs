import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simple useAuth hook simulating authentication status
export function useAuth() {
  // For demo, read auth status from localStorage or just a hardcoded value
  // Here, you can customize the logic or integrate with context, etc.
  // For simplicity, let's assume user is authenticated if localStorage key 'auth' === 'true'

  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
}

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
