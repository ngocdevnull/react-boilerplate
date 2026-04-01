import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';

import { tooltipContentVariants, tooltipRootVariants } from './variant';

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'>,
    VariantProps<typeof tooltipRootVariants>,
    VariantProps<typeof tooltipContentVariants> {
  content: ReactNode;
  children: ReactNode;
}
