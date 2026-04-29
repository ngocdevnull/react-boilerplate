import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../common/cn';

export const Command = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-black',
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
