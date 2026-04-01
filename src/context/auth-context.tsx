import * as React from 'react';
import { useAuthStore } from '@core/store/auth.store';

export const useAuth = () => {
  const store = useAuthStore();
  return {
    ...store,
    isAuthenticated: Boolean(store.user && store.accessToken),
  };
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
