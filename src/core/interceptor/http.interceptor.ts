import type { AxiosInstance, AxiosResponse } from 'axios';

import { toHttpError } from '../utils/http.util';

export function setupHttpInterceptor(apiClient: AxiosInstance): void {
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      return Promise.reject(toHttpError(error));
    },
  );
}
