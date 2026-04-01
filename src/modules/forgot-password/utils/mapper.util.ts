import type { ForgotPasswordResponseDto } from '@core/types/auth/forgot-password.type';

export function toForgotPasswordMessage(response: ForgotPasswordResponseDto): string {
  return response.message ?? response.data?.message ?? '';
}
