import { z } from 'zod';
import { signUpSchema } from '../schema/sign-up.schema';

export type SignUpFormValues = z.infer<typeof signUpSchema>;
