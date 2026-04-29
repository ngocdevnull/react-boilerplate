import { apiClient } from './api-client';
import { BaseApi } from './base.api';
import type {
  ForgotPasswordPayload,
  ForgotPasswordResponseDto,
} from '../types/auth/forgot-password.dto';
import type { SignInPayload, SignInResponseDto } from '../types/auth/sign-in.dto';
import type { SignUpPayload, SignUpResponseDto } from '../types/auth/sign-up.dto';

export class AuthApi extends BaseApi {
  protected readonly path = '/auth';

  public login(data: SignInPayload) {
    return apiClient.post<SignInResponseDto>(`${this.path}/sign-in`, data);
  }

  public register(data: SignUpPayload) {
    return apiClient.post<SignUpResponseDto>(`${this.path}/sign-up`, data);
  }

  public verifyEmail(token: string) {
    return apiClient.post<string>(`${this.path}/verify-email?token=${token}`, '');
  }

  public forgotPassword(data: ForgotPasswordPayload) {
    return apiClient.post<ForgotPasswordResponseDto>(`${this.path}/forgot-password`, data);
  }
}

export const authApi = new AuthApi();
