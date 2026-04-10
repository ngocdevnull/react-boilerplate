import type { MillDto, CreateMillPayload, UpdateMillPayload } from '@core/types/mill/mill.dto';
import type { MillManagementRow } from '../types/mill-management-row.type';
import type { MillFormValues } from '../schema/mill-form.schema';

export const millConverter = {
  toRows: (items: MillDto[]): MillManagementRow[] => {
    return items.map((item) => ({
      id: item.id,
      name: item.name,
      country: item.country,
      address: item.address,
      status: item.status.toLowerCase(),
      dailyCycle: item.dailyCycle,
      expectedCapacity: item.expectedCapacity,
    }));
  },

  toCreatePayload: (values: MillFormValues): CreateMillPayload => {
    return {
      name: values.name,
      country: values.country,
      address: values.address,
      dailyCycle: `${values.openTime} - ${values.closeTime}`,
      expectedCapacity: values.expectedCapacity,
    };
  },

  toUpdatePayload: (values: MillFormValues): UpdateMillPayload => {
    return {
      ...millConverter.toCreatePayload(values),
      status: values.status,
    };
  },

  toFormValues: (row: MillManagementRow): Partial<MillFormValues> => {
    const [openTime = '', closeTime = ''] = row.dailyCycle.split(' - ');
    return {
      name: row.name,
      country: row.country,
      address: row.address,
      status: row.status.toUpperCase(),
      openTime,
      closeTime,
      expectedCapacity: row.expectedCapacity,
    };
  },
};
