import { Controller, type FieldValues } from 'react-hook-form';

import { Label } from '../label/label';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import { Textarea } from '../textarea/textarea';
import type { TextareaFieldProps } from './types';

export const TextareaField = <T extends FieldValues>({
  name,
  control,
  label,
  htmlFor,
  required = false,
  hint,
  error,
  placeholder,
  className,
  textareaClassName,
  isError,
  ...props
}: TextareaFieldProps<T>) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && (
        <Label htmlFor={htmlFor} className="mb-0.5 ml-0.5">
          {label}
          {required && <span className={cn(fieldAsteriskVariants())}>*</span>}
        </Label>
      )}

      {control && name ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder={placeholder}
              isError={!!error || isError}
              className={textareaClassName}
              value={field.value ?? ''}
              {...props}
            />
          )}
        />
      ) : (
        <Textarea
          placeholder={placeholder}
          isError={!!error || isError}
          className={textareaClassName}
          {...props}
        />
      )}

      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </div>
  );
};

TextareaField.displayName = 'TextareaField';
