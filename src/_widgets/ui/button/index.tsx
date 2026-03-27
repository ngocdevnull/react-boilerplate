import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../common/cn';
import type { ButtonProps } from './types';
import { buttonVariants } from './variant';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, leftIcon, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      return (
        <Slot className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button className={classes} ref={ref} disabled={isLoading || props.disabled} {...props}>
        {isLoading ? <span className="mr-2 animate-spin">...</span> : leftIcon}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
