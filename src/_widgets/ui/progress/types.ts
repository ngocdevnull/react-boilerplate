import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { progressVariants } from './variant';

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
  showValue?: boolean;
}
