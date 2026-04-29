import * as React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '../../common/cn';
import { inputVariants } from './variant';
import type { InputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, isError, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            inputVariants({ variant, isError, className }),
            isError && 'pr-10'
          )}
          ref={ref}
          {...props}
        />
        {isError && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-error-secondary pointer-events-none">
            <AlertCircle className="h-5 w-5" />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants };
