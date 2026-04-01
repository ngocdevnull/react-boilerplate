import { z } from 'zod';

import { forgotPasswordSchema } from '../schema/forgot-password.schema';

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
