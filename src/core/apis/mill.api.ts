import { apiClient } from './api-client';
import { BaseApi } from './base.api';
import type { MillDto, CreateMillPayload, UpdateMillPayload } from '../types/mill/mill.dto';

export class MillApi extends BaseApi {
  protected readonly path = '/mills';

  public getList(params?: Record<string, unknown>) {
    return apiClient.get<PaginatedContent<MillDto>>(this.path, { params });
  }

  public getById(id: ID) {
    return apiClient.get<MillDto>(`${this.path}/${id}`);
  }

  public create(data: CreateMillPayload) {
    return apiClient.post<MillDto>(this.path, data);
  }

  public update(id: ID, data: UpdateMillPayload) {
    return apiClient.patch<MillDto>(`${this.path}/${id}`, data);
  }

  public remove(id: ID) {
    return apiClient.delete<void>(`${this.path}/${id}`);
  }

  public updateStatus(id: ID, status: string) {
    return apiClient.patch<void>(`${this.path}/${id}/status`, { status });
  }
}

export const millApi = new MillApi();
