import { AUTH_ROLES } from '../constants/auth-roles';
import type { AuthUser } from './auth-context.type';

export type AuthRole = (typeof AUTH_ROLES)[keyof typeof AUTH_ROLES];

export interface AuthState {
  user: Nullable<AuthUser>;
  accessToken: Nullable<string>;
  refreshToken: Nullable<string>;
  isInitializing: boolean;
  error: Nullable<string>;
  setAuth: (user: AuthUser, accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
  setError: (error: Nullable<string>) => void;
  clearError: () => void;
}
