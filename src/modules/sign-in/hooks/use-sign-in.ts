import { DEFAULT_FALLBACK_ERROR_MESSAGE } from '@core/constants/http-error-messages';
import { useAuthStore } from '@core/store/auth-store';
import type { HttpError } from '@core/types/http-error.type';
import type { SignInPayload } from '@core/types/auth/sign-in.type';

import { signInService } from '../services/sign-in.service';

export function useSignIn() {
  const { 
    setAuth, 
    setLoading, 
    setError, 
    clearError, 
    isLoading, 
    error 
  } = useAuthStore();

  const signIn = async (payload: SignInPayload) => {
    setLoading(true);
    setError(null);
    try {
      const { user, accessToken } = await signInService.signIn(payload);
      setAuth(user, accessToken);
    } catch (err) {
      const message = (err as HttpError)?.message ?? DEFAULT_FALLBACK_ERROR_MESSAGE;
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { 
    signIn, 
    isSubmitting: isLoading, 
    error, 
    clearError 
  };
}
