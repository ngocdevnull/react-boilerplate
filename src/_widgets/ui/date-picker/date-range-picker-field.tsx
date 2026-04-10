import { FieldValues, useController } from 'react-hook-form';
import { DateRangePicker } from './date-range-picker';
import type { DateRangePickerFieldProps } from './types';

export const DateRangePickerField = <T extends FieldValues>({
  name,
  control,
  className,
  placeholder,
}: DateRangePickerFieldProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <DateRangePicker
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};
