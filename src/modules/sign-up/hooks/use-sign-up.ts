import { DEFAULT_FALLBACK_ERROR_MESSAGE } from '@core/constants/http-error-messages';
import { useAuthStore } from '@core/store/auth.store';
import { useLoadingStore } from '@core/store/loading.store';
import type { HttpError } from '@core/types/http-error.type';
import type { SignUpPayload } from '@core/types/auth/sign-up.dto';
import { signUpService } from '../services/sign-up.service';
export const useSignUp = () => {
  const { setAuth, setError, clearError, error } = useAuthStore();
  const { isLoading, setLoading } = useLoadingStore();
  const signUp = async (payload: SignUpPayload) => {
    setLoading(true);
    setError(null);
    try {
      const { user, accessToken, refreshToken } = await signUpService.signUp(payload);
      if (user && accessToken && refreshToken) {
        setAuth(user, accessToken, refreshToken);
      }
    } catch (err) {
      const message = (err as HttpError)?.message ?? DEFAULT_FALLBACK_ERROR_MESSAGE;
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return {
    signUp,
    isSubmitting: isLoading,
    error,
    clearError,
  };
};
