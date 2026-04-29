export const STATUS = {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  INACTIVE: 'INACTIVE',
} as const;

export const STATUS_VALUES = [STATUS.ACTIVE, STATUS.PENDING, STATUS.INACTIVE] as const;

export const STATUS_KEY = {
  ACTIVE: 'active',
  PENDING: 'pending',
  INACTIVE: 'inactive',
} as const;

export type StatusValue = (typeof STATUS_VALUES)[number];

export const STATUS_OPTIONS = [
  { value: STATUS.ACTIVE, label: 'Active' },
  { value: STATUS.PENDING, label: 'Pending' },
  { value: STATUS.INACTIVE, label: 'Inactive' },
] as const;

export const STATUS_FILTER_OPTIONS = [{ label: 'All', value: 'all' }, ...STATUS_OPTIONS] as const;
