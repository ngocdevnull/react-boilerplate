import type { UnknownRecord } from '@core/types/auth-context.type';
export const isRecord = (value: unknown): value is UnknownRecord => {
  return typeof value === 'object' && value !== null;
};
export const toNullableString = (value: unknown): Nullable<string> => {
  return typeof value === 'string' ? value : null;
};
