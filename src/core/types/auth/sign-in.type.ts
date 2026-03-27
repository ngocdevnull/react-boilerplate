import { AuthRole } from '../../constants/auth-roles';

export type SignInPayload = {
  email: string;
  password: string;
  role: AuthRole;
  rememberMe?: boolean;
};

export type SignInResponseDto = {
  accessToken?: string;
  token?: string;
  user?: {
    id?: ID;
    email?: string;
    role?: AuthRole;
  };
  data?: unknown;
};
