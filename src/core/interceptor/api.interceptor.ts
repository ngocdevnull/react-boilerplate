import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
export const setupRequestInterceptor = (apiClient: AxiosInstance): void => {
  apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
export const setupResponseInterceptor = (apiClient: AxiosInstance): void => {
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
