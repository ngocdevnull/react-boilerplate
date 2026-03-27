import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import {
  CREDENTIALS_ERROR_MESSAGE,
  DEFAULT_HTTP_ERROR_MESSAGE,
} from '../constants/http-error-messages';
import type { HttpError } from '../types/http-error.type';

function toHttpError(error: unknown): HttpError {
  const axiosError = error as AxiosError;
  const status = axiosError?.response?.status;
  const data = axiosError?.response?.data;

  const dataObj: { message?: unknown } | undefined =
    data && typeof data === 'object' ? (data as { message?: unknown }) : undefined;

  let message: string;
  if (status === 400 || status === 401) {
    message = CREDENTIALS_ERROR_MESSAGE;
  } else {
    message =
      axiosError?.message ||
      (typeof dataObj?.message === 'string' ? dataObj.message : '') ||
      DEFAULT_HTTP_ERROR_MESSAGE;
  }

  return { status, message, data };
}

export function setupHttpInterceptor(apiClient: AxiosInstance): void {
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      return Promise.reject(toHttpError(error));
    },
  );
}
