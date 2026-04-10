import type { AxiosError } from 'axios';
import {
  CREDENTIALS_ERROR_MESSAGE,
  DEFAULT_HTTP_ERROR_MESSAGE,
} from '../constants/http-error-messages';
import type { HttpError, HttpErrorData } from '../types/http-error.type';
export const toHttpError = (error: unknown): HttpError => {
  const axiosError = error as AxiosError;
  const status = axiosError?.response?.status;
  const data = axiosError?.response?.data;
  const dataObj: Maybe<HttpErrorData> =
    data && typeof data === 'object' ? (data as HttpErrorData) : undefined;
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
};
