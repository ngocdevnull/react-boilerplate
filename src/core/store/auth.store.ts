import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { AUTH_SESSION_STORAGE_KEY } from '../constants/auth-storage';
import { setAuthHeader } from '../utils/auth.util';
import type { AuthUser } from '../types/auth-context.type';
import type { AuthState } from '../types/auth.type';

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        isInitializing: true,
        error: null,

        setAuth: (user: AuthUser, accessToken: string, refreshToken: string) => {
          set({
            user,
            accessToken,
            refreshToken,
            error: null,
          });
          setAuthHeader(accessToken);
        },

        clearAuth: () => {
          set({ user: null, accessToken: null, refreshToken: null, error: null });
          setAuthHeader(null);
        },

        setError: (error: Nullable<string>) => {
          set({ error });
        },

        clearError: () => {
          set({ error: null });
        },
      }),
      {
        name: AUTH_SESSION_STORAGE_KEY,
        onRehydrateStorage: () => (state) => {
          if (state) {
            setAuthHeader(state.accessToken);
            state.isInitializing = false;
          }
        },
      },
    ),
    { enabled: import.meta.env.DEV, name: 'AuthStore' },
  ),
);

export const useAuth = () => {
  const store = useAuthStore();

  return {
    ...store,
    isAuthenticated: Boolean(store.user && store.accessToken),
  };
};
