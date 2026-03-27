import { z } from 'zod';

export const signInSchema = z.object({
  role: z.enum(['doctor', 'patient']),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Invalid email address',
    }),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});
