import { Controller, type FieldValues } from 'react-hook-form';

import { Label } from '../label/label';
import { MultiSelect } from '../multi-select/multi-select';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import type { MultiSelectFieldProps } from './types';

export const MultiSelectField = <T extends FieldValues>({
  name,
  control,
  options,
  label,
  placeholder,
  required = false,
  error,
  hint,
  className,
}: MultiSelectFieldProps<T>) => {
  return (
    <section className={cn('flex flex-col gap-2', className)}>
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
          <MultiSelect
            selected={Array.isArray(field.value) ? field.value : []}
            onChange={field.onChange}
            options={options}
            placeholder={placeholder}
            className={cn(!!error && 'border-error focus-within:ring-error')}
          />
        )}
      />

      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </section>
  );
};
