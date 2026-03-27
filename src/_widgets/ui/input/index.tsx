import * as React from 'react';

import { cn } from '../../common/cn';
import { inputVariants } from './variant';
import type { InputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, isError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, isError, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants };
