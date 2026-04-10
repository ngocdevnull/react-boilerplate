import type { SignUpPayload } from '@core/types/auth/sign-up.dto';
import { authApi } from '@core/apis/auth.api';

import type { SignUpResult } from '../types/sign-up.service.type';
import { signUpConverter } from '../converters/sign-up.converter';

export const signUpService = {
  signUp: async (payload: SignUpPayload): Promise<SignUpResult> => {
    const response = await authApi.register(payload);
    const accessToken = signUpConverter.toAccessToken(response);
    const refreshToken = signUpConverter.toRefreshToken(response);

    if (accessToken && refreshToken) {
      const user = signUpConverter.toAuthUser(response, payload);
      return { user, accessToken, refreshToken };
    }

    return { user: null, accessToken: null, refreshToken: null };
  },
};
