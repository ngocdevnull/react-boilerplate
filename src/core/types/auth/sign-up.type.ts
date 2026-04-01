import { AuthRole } from '../../constants/auth-roles';

export type SignUpPayload = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  password?: string;
  agreeTerms?: boolean;
};

export type SignUpResponseDto = {
  accessToken?: string;
  refreshToken?: string;
  token?: string;
  user?: {
    id: ID;
    email: string;
    name?: string;
    role: AuthRole;
  };
  data?: unknown;
};
