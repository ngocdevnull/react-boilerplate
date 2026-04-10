import * as React from 'react';

import { cn } from '../../../common/cn';
import { Input } from '../../input/input';

export const InputComponent = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <Input
      variant="borderless"
      ref={ref}
      className={cn('rounded-e-input rounded-s-none border-0 shadow-none', className)}
      {...props}
    />
  ),
);

InputComponent.displayName = 'InputComponent';
