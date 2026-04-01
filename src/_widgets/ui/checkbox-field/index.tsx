import { cn } from '../../common/cn';
import { fieldErrorVariants, fieldHintVariants } from '../common/field-shared.variant';
import type { CheckboxFieldProps } from './types';

export function CheckboxField({
  error,
  hint,
  children,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      <div className="flex items-start w-full">
        {children}
      </div>
      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </div>
  );
}
