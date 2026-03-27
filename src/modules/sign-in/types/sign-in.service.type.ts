import type { AuthUser } from '@core/types/auth-context.type';

export interface SignInResult {
  user: AuthUser;
  accessToken: string;
}
