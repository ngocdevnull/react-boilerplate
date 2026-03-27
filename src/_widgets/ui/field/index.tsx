import { Label } from '../label';

import { cn } from '../../common/cn';

import type { FieldProps } from './types';
import { fieldAsteriskVariants, fieldErrorVariants, fieldHintVariants, fieldVariants } from './variant';

export function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className,
  ...props
}: FieldProps) {
  return (
    <div className={cn(fieldVariants({ className }))} {...props}>
      {label && (
        <Label htmlFor={htmlFor}>
          {label}
          {required && <span className={cn(fieldAsteriskVariants())}>*</span>}
        </Label>
      )}
      {children}
      {error ? (
        <span className={cn(fieldErrorVariants())}>{error}</span>
      ) : hint ? (
        <span className={cn(fieldHintVariants())}>{hint}</span>
      ) : null}
    </div>
  );
}
