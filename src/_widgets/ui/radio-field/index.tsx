import { Label } from '../label';
import { cn } from '../../common/cn';
import { fieldAsteriskVariants, fieldErrorVariants, fieldHintVariants } from '../common/field-shared.variant';
import type { RadioFieldProps } from './types';

export function RadioField({
  label,
  required = false,
  error,
  hint,
  children,
  className,
}: RadioFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      {label && (
        <Label className="mb-0.5 ml-0.5">
          {label}
          {required && <span className={cn(fieldAsteriskVariants())}>*</span>}
        </Label>
      )}
      <div className="w-full">{children}</div>
      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </div>
  );
}
