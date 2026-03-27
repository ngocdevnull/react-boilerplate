import { useAuthStore } from '@core/store/auth-store';
import { signUpService } from '../services/sign-up.service';
import type { SignUpPayload } from '@core/types/auth/sign-up.type';
import { DEFAULT_FALLBACK_ERROR_MESSAGE } from '@core/constants/http-error-messages';
import type { HttpError } from '@core/types/http-error.type';

export function useSignUp() {
  const { 
    setAuth, 
    setLoading, 
    setError, 
    clearError, 
    isLoading, 
    error 
  } = useAuthStore();

  const signUp = async (payload: SignUpPayload) => {
    setLoading(true);
    setError(null);
    try {
      const { user, accessToken } = await signUpService.signUp(payload);
      if (user && accessToken) {
        setAuth(user, accessToken);
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
    clearError 
  };
}
