import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../common/cn';

export const CommandEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn('py-6 text-center text-sm text-muted-foreground', className)}
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
