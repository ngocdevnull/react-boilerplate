import { authApi } from '@core/apis/auth.api';
import type { AuthUser } from '@core/types/auth-context.type';
import type { SignInPayload } from '@core/types/auth/sign-in.type';

import { signInConverter } from '../converters/sign-in.converter';
import type { SignInResult } from '../types/sign-in.service.type';

export const signInService = {
  signIn: async (payload: SignInPayload): Promise<SignInResult> => {
    const response = await authApi.login(payload);
    const accessToken = signInConverter.toAccessToken(response);

    if (!accessToken) {
      throw new Error('No access token found in sign-in response');
    }

    const user = signInConverter.toAuthUser(response, payload);

    return {
      user,
      accessToken,
    };
  },
};
