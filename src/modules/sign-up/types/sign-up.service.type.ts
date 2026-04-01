import type { AuthUser } from '@core/types/auth-context.type';

export interface SignUpResult {
  user: Nullable<AuthUser>;
  accessToken: Nullable<string>;
  refreshToken: Nullable<string>;
}
