import axios, { type AxiosInstance } from 'axios';

import { setupRequestInterceptor, setupResponseInterceptor } from '../interceptor/api.interceptor';
import { setupHttpInterceptor } from '../interceptor/http.interceptor';

const baseURL = import.meta.env.VITE_API_URL;

export const apiClient: AxiosInstance = axios.create({
  baseURL,
});

setupRequestInterceptor(apiClient);
setupResponseInterceptor(apiClient);
setupHttpInterceptor(apiClient);
