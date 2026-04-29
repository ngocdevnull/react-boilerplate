import * as React from 'react';

import { cn } from '../../common/cn';
import type { BadgeProps } from './types';
import { badgeVariants } from './variant';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />
  ),
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
