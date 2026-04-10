import { authApi } from '@core/apis/auth.api';
import type { ForgotPasswordPayload } from '@core/types/auth/forgot-password.dto';

import type { ForgotPasswordResult } from '../types/forgot-password.service.type';
import { toForgotPasswordMessage } from '../utils/mapper.util';

export const forgotPasswordService = {
  forgotPassword: async (payload: ForgotPasswordPayload): Promise<ForgotPasswordResult> => {
    const response = await authApi.forgotPassword(payload);
    const message = toForgotPasswordMessage(response);

    return { message };
  },
};
