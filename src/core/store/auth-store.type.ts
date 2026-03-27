import type { AuthUser } from '../types/auth-context.type';

export interface AuthState {
  user: Nullable<AuthUser>;
  accessToken: Nullable<string>;
  isLoading: boolean;
  isInitializing: boolean;
  error: Nullable<string>;
  setAuth: (user: AuthUser, accessToken: string) => void;
  clearAuth: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: Nullable<string>) => void;
  clearError: () => void;
}
