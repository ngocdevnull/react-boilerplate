import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';

import { fieldVariants } from './variant';

export interface FieldProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}
