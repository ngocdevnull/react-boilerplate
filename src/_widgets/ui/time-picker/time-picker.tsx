import * as React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../../common/cn';
import { inputVariants } from '../input/variant';

export interface TimePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className, isError, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type="time"
          className={cn(
            inputVariants({ isError, className }),
            'appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer',
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black-40">
          <Clock className="h-4 w-4" />
        </div>
      </div>
    );
  },
);
TimePicker.displayName = 'TimePicker';

export { TimePicker };
