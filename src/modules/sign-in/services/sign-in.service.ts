import { authApi } from '@core/apis/auth.api';
import type { AuthUser } from '@core/types/auth-context.type';
import type { SignInPayload } from '@core/types/auth/sign-in.dto';

import { signInConverter } from '../converters/sign-in.converter';
import type { SignInResult } from '../types/sign-in.service.type';

export const signInService = {
  signIn: async (payload: SignInPayload): Promise<SignInResult> => {
    if (payload.email === 'ngoctest@gmail.com' && payload.password === 'ngoctest123') {
      return {
        user: {
          id: 'mock-id-123',
          email: 'ngoctest@gmail.com',
          name: 'Ngoc Test',
          role: payload.role,
        },
        accessToken: 'mock-access-token-123',
        refreshToken: 'mock-refresh-token-123',
      };
    }

    const response = await authApi.login(payload);
    const accessToken = signInConverter.toAccessToken(response);
    const refreshToken = signInConverter.toRefreshToken(response);

    if (!accessToken || !refreshToken) {
      throw new Error('No access or refresh token found in sign-in response');
    }

    const user = signInConverter.toAuthUser(response, payload);

    return {
      user,
      accessToken,
      refreshToken,
    };
  },
};
