import type { VariantProps } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';

import { datePickerVariants } from './variant';

export interface DatePickerProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof datePickerVariants> {}
