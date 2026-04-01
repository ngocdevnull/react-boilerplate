import { apiClient } from '../apis/api-client';

export function setAuthHeader(accessToken: Nullable<string>) {
  if (accessToken) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
}
