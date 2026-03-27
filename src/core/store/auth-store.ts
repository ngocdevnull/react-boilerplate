import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { apiClient } from '../apis/api-client';
import { AUTH_SESSION_STORAGE_KEY } from '../constants/auth-storage';
import type { AuthUser } from '../types/auth-context.type';
import type { AuthState } from './auth-store.type';

function setAuthHeader(accessToken: Nullable<string>) {
  if (accessToken) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        isLoading: false,
        isInitializing: true,
        error: null,

        setAuth: (user: AuthUser, accessToken: string) => {
          set({
            user,
            accessToken,
            error: null,
          });
          setAuthHeader(accessToken);
        },

        clearAuth: () => {
          set({ user: null, accessToken: null, error: null });
          setAuthHeader(null);
        },

        setLoading: (isLoading: boolean) => {
          set({ isLoading });
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
