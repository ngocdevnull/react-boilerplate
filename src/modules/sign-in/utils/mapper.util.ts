import type { UnknownRecord } from '@core/types/auth-context.type';

export function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null;
}

export function toNullableString(value: unknown): Nullable<string> {
  return typeof value === 'string' ? value : null;
}
