import { subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, subWeeks, subMonths, subYears } from 'date-fns';

export const DATE_RANGE_PRESETS = [
  { label: 'Today', getValue: () => ({ from: new Date(), to: new Date() }) },
  { label: 'Yesterday', getValue: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
  { label: 'This week', getValue: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) }) },
  { label: 'Last week', getValue: () => ({ from: startOfWeek(subWeeks(new Date(), 1)), to: endOfWeek(subWeeks(new Date(), 1)) }) },
  { label: 'This month', getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
  { label: 'Last month', getValue: () => ({ from: startOfMonth(subMonths(new Date(), 1)), to: endOfMonth(subMonths(new Date(), 1)) }) },
  { label: 'This year', getValue: () => ({ from: startOfYear(new Date()), to: endOfYear(new Date()) }) },
  { label: 'Last year', getValue: () => ({ from: startOfYear(subYears(new Date(), 1)), to: endOfYear(subYears(new Date(), 1)) }) },
  { label: 'All time', getValue: () => undefined },
] as const;
