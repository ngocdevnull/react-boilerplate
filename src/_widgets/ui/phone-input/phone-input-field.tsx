import { Controller, type FieldValues, type Control, type Path } from 'react-hook-form';
import { Label } from '../label/label';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import { PhoneInput } from './phone-input';

interface PhoneInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  disabled?: boolean;
  defaultCountry?: any;
}

export const PhoneInputField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  required = false,
  error,
  hint,
  className,
  disabled,
  defaultCountry,
}: PhoneInputFieldProps<T>) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && (
        <Label className="mb-0.5 ml-0.5">
          {label}
          {required && <span className={cn(fieldAsteriskVariants())}>*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            disabled={disabled}
            isError={!!error}
            defaultCountry={defaultCountry}
          />
        )}
      />

      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </div>
  );
};
