import { DEFAULT_FALLBACK_ERROR_MESSAGE } from '@core/constants/http-error-messages';
import { useAuthStore } from '@core/store/auth.store';
import { useLoadingStore } from '@core/store/loading.store';
import type { HttpError } from '@core/types/http-error.type';
import type { ForgotPasswordPayload } from '@core/types/auth/forgot-password.type';

import { forgotPasswordService } from '../services/forgot-password.service';

export function useForgotPassword() {
  const { setError, clearError, error } = useAuthStore();
  const { isLoading, setLoading } = useLoadingStore();

  const forgotPassword = async (payload: ForgotPasswordPayload) => {
    setLoading(true);
    setError(null);
    try {
      return await forgotPasswordService.forgotPassword(payload);
    } catch (err) {
      const message = (err as HttpError)?.message ?? DEFAULT_FALLBACK_ERROR_MESSAGE;
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    forgotPassword,
    isSubmitting: isLoading,
    error,
    clearError,
  };
}
