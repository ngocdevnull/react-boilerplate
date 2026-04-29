import { millApi } from '@core/apis/mill.api';
import type { UpdateMillPayload } from '@core/types/mill/mill.dto';

import { millConverter } from '../converters/mill.converter';
import type { MillManagementRow } from '../types/mill-management-row.type';

export const millService = {
  getMills: async (
    params?: Record<string, unknown>,
  ): Promise<PaginatedContent<MillManagementRow>> => {
    const response = await millApi.getList(params);
    const { items, ...pagination } = response.data;

    return {
      ...pagination,
      items: millConverter.toRows(items),
    };
  },

  updateMillStatus: async (id: ID, status: string) => {
    const response = await millApi.updateStatus(id, status);
    return response.data;
  },

  getMillById: async (id: ID) => {
    const response = await millApi.getById(id);
    return response.data;
  },

  updateMill: async (id: ID, data: UpdateMillPayload) => {
    const response = await millApi.update(id, data);
    return response.data;
  },
};
