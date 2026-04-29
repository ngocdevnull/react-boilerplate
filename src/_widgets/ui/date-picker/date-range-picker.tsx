import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, X } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '../../common/cn';
import { Button } from '../button/button';
import { Calendar } from '../calendar/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';

import type { DateRangePickerProps } from './types';
import { DateRangePickerPresets } from './date-range-picker-presets';
import { DateRangePickerFooter } from './date-range-picker-footer';

export const DateRangePicker = ({
  className,
  value,
  onChange,
  placeholder = 'Pick a date range',
}: DateRangePickerProps) => {
  const [tempValue, setTempValue] = React.useState<Maybe<DateRange>>(value);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setTempValue(value);
    }
  }, [isOpen, value]);

  const handleApply = () => {
    onChange?.(tempValue);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(undefined);
    setTempValue(undefined);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'h-11 w-full justify-start text-left font-normal bg-white border-border-primary hover:bg-white',
              !value && 'text-text-tertiary',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-black-40" />
            <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {value?.from ? (
                value.to ? (
                  <>
                    {format(value.from, 'dd/MM/yyyy')} - {format(value.to, 'dd/MM/yyyy')}
                  </>
                ) : (
                  format(value.from, 'dd/MM/yyyy')
                )
              ) : (
                <span>{placeholder}</span>
              )}
            </div>
            {value && (
              <X
                className="ml-auto h-4 w-4 text-black-40 hover:text-black-10"
                onClick={handleClear}
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex" align="start">
          <DateRangePickerPresets onSelect={setTempValue} />
          <div className="flex flex-col bg-white">
            <div className="flex">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={tempValue?.from}
                selected={tempValue}
                onSelect={setTempValue}
                numberOfMonths={2}
              />
            </div>
            <DateRangePickerFooter
              tempValue={tempValue}
              onCancel={handleCancel}
              onApply={handleApply}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
