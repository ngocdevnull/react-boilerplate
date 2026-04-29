import type { VariantProps } from 'class-variance-authority';

import { badgeVariants } from './variant';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}
