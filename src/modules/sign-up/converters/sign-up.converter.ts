import { AUTH_ROLES } from '@core/constants/auth-roles';
import type { SignUpPayload, SignUpResponseDto } from '@core/types/auth/sign-up.type';
import type { AuthUser, UnknownRecord } from '@core/types/auth-context.type';

import { isRecord, toNullableString } from '../utils/mapper.util';

function toUser(value: unknown): Nullable<AuthUser> {
  if (!isRecord(value)) return null;
  const email = toNullableString(value.email);
  const role = toNullableString(value.role) as Nullable<(typeof AUTH_ROLES)[keyof typeof AUTH_ROLES]>;
  if (!email || !role) return null;
  return {
    id: (value.id as Nullable<string>) ?? null,
    email,
    role,
  };
}

export const signUpConverter = {
  toAccessToken: (response: SignUpResponseDto): Nullable<string> => {
    if (response.accessToken) return response.accessToken;
    if (response.token) return response.token;
    if (isRecord(response.data)) {
      const nested = response.data as UnknownRecord;
      const token = toNullableString(nested.accessToken) ?? toNullableString(nested.token);
      if (token) return token;
    }
    return null;
  },

  toAuthUser: (response: SignUpResponseDto, payload: SignUpPayload): AuthUser => {
    const directUser = toUser(response.user);
    if (directUser) return directUser;
    if (isRecord(response.data)) {
      const nested = response.data as UnknownRecord;
      const nestedUser = toUser(nested.user);
      if (nestedUser) return nestedUser;
    }
    return {
      id: null,
      email: payload.email,
      role: AUTH_ROLES.PATIENT,
    };
  },
};
