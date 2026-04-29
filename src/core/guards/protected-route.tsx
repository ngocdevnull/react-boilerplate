import { Navigate, Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

import { useAuth } from '../store/auth.store';
import type { ProtectedRouteProps } from '../types/guards.type';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isInitializing } = useAuth();

  if (isInitializing) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
