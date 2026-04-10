import { Controller, type FieldValues } from 'react-hook-form';

import { Label } from '../label/label';
import { Select } from '../select/select';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import type { SelectFieldProps } from './types';

export const SelectField = <T extends FieldValues>({
  name,
  control,
  options,
  label,
  placeholder,
  required = false,
  error,
  hint,
  className,
  disabled,
}: SelectFieldProps<T>) => {
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
          <Select
            value={field.value ? String(field.value) : ''}
            onValueChange={field.onChange}
            options={options}
            placeholder={placeholder}
            disabled={disabled}
            isError={!!error}
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
