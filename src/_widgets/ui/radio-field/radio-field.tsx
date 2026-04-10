import { Controller, type FieldValues } from 'react-hook-form';

import { Label } from '../label/label';
import { RadioGroup, RadioGroupItem } from '../radio/radio';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import type { RadioFieldProps } from './types';

export const RadioField = <T extends FieldValues>({
  name,
  control,
  options,
  label,
  required = false,
  error,
  hint,
  className,
  orientation = 'horizontal',
}: RadioFieldProps<T>) => {
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
          <RadioGroup
            value={field.value ?? ''}
            onValueChange={field.onChange}
            className={cn('flex gap-4', orientation === 'horizontal' ? 'flex-row' : 'flex-col')}
          >
            {options.map((option) => (
              <RadioGroupItem
                key={option.value}
                value={option.value}
                label={option.label}
                id={`${name}-${option.value}`}
              />
            ))}
          </RadioGroup>
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
