import * as React from 'react';

import { cn } from '../../common/cn';

import type { DatePickerProps } from './types';
import { datePickerVariants } from './variant';

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, isError, type = 'date', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(datePickerVariants({ isError, className }))}
        {...props}
      />
    );
  },
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
