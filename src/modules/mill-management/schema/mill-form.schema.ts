import { z } from 'zod';

export const millFormSchema = z.object({
  name: z.string().min(1, 'Mill name is required').max(100, 'Mill name must be at most 100 characters'),
  country: z.string().min(1, 'Country is required'),
  address: z.string().min(1, 'Address is required').max(500, 'Address must be at most 500 characters'),
  status: z.string().optional(),
  openTime: z.string().min(1, 'Open time is required'),
  closeTime: z.string().min(1, 'Close time is required'),
  expectedCapacity: z.coerce.number().min(0, 'Expected capacity must be at least 0'),
});

export type MillFormValues = z.infer<typeof millFormSchema>;
