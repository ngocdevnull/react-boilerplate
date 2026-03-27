import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export function setupRequestInterceptor(apiClient: AxiosInstance): void {
  apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export function setupResponseInterceptor(apiClient: AxiosInstance): void {
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}
