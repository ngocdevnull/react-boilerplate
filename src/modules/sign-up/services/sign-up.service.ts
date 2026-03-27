import type { SignUpPayload } from '@core/types/auth/sign-up.type';
import { authApi } from '@core/apis/auth.api';

import type { SignUpResult } from '../types/sign-up.service.type';
import { signUpConverter } from '../converters/sign-up.converter';

export const signUpService = {
  signUp: async (payload: SignUpPayload): Promise<SignUpResult> => {
    const response = await authApi.register(payload);
    const accessToken = signUpConverter.toAccessToken(response);

    if (accessToken) {
      const user = signUpConverter.toAuthUser(response, payload);
      return { user, accessToken };
    }

    return { user: null, accessToken: null };
  },
};
