import { z } from 'zod';
import { signInSchema } from '../schema/sign-in.schema';

export type SignInFormValues = z.infer<typeof signInSchema>;
