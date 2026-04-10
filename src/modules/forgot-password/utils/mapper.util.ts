import type { ForgotPasswordResponseDto } from '@core/types/auth/forgot-password.dto';
export const toForgotPasswordMessage = (response: ForgotPasswordResponseDto): string => {
  return response.message ?? response.data?.message ?? '';
};
