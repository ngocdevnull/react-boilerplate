import { DEFAULT_FALLBACK_ERROR_MESSAGE } from '@core/constants/http-error-messages';
import { useAuthStore } from '@core/store/auth.store';
import { useLoadingStore } from '@core/store/loading.store';
import type { HttpError } from '@core/types/http-error.type';
import type { SignInPayload } from '@core/types/auth/sign-in.type';

import { signInService } from '../services/sign-in.service';

export function useSignIn() {
  const { setAuth, setError, clearError, error } = useAuthStore();
  const { isLoading, setLoading } = useLoadingStore();

  const signIn = async (payload: SignInPayload) => {
    setLoading(true);
    setError(null);
    try {
      const { user, accessToken, refreshToken } = await signInService.signIn(payload);
      setAuth(user, accessToken, refreshToken);
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
