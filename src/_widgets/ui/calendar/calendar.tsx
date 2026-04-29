import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../common/cn';
import type { CalendarProps } from './types';
import { calendarVariants } from './variant';

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn('p-3', className)}
    classNames={{
      ...calendarVariants(props.mode),
      ...classNames,
    }}
    components={{
      Chevron: ({ ...props }) => {
        if (props.orientation === 'left') {
          return <ChevronLeft className="h-4 w-4" />;
        }
        return <ChevronRight className="h-4 w-4" />;
      },
    }}
    {...props}
  />
);

Calendar.displayName = 'Calendar';
