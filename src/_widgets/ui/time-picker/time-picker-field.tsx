import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Label } from '../label/label';
import { TimePicker, TimePickerProps } from './time-picker';

interface TimePickerFieldProps<T extends FieldValues> extends TimePickerProps {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
  required?: boolean;
}

export const TimePickerField = <T extends FieldValues>({
  name,
  control,
  label,
  error,
  required,
  ...props
}: TimePickerFieldProps<T>) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <Label htmlFor={name} className="text-sm font-medium text-black-10">
          {label}
          {required && <span className="ml-1 text-error-primary">*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimePicker {...field} {...props} id={name} isError={!!error} value={field.value ?? ''} />
        )}
      />
      {error && <p className="text-xs text-error-primary">{error}</p>}
    </div>
  );
};
