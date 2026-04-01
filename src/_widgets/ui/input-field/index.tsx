import { Label } from '../label';
import { cn } from '../../common/cn';
import { fieldAsteriskVariants, fieldErrorVariants, fieldHintVariants } from '../common/field-shared.variant';
import type { InputFieldProps } from './types';
import { inputFieldVariants } from './variant';

export function InputField({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className,
}: InputFieldProps) {
  return (
    <div className={cn(inputFieldVariants({ className }))}>
      {label && (
        <Label htmlFor={htmlFor} className="mb-0.5 ml-0.5">
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
