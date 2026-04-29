import { Controller, type FieldValues } from 'react-hook-form';
import { Label } from '../label/label';
import { Switch } from '../switch/switch';
import { cn } from '../../common/cn';
import { fieldErrorVariants } from '../common/field-shared.variant';
import type { SwitchFieldProps } from './types';
export const SwitchField = <T extends FieldValues>({
  name,
  control,
  label,
  description,
  error,
  className,
}: SwitchFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={cn('flex items-start gap-3 w-full', className)}>
          <div className="mt-1">
            <Switch id={name} checked={field.value} onCheckedChange={field.onChange} />
          </div>
          <div className="flex flex-col gap-1">
            {label && (
              <Label
                htmlFor={name}
                className="text-sm font-semibold text-text-primary cursor-pointer mb-0"
              >
                {label}
              </Label>
            )}
            {description && <p className="text-sm text-text-tertiary">{description}</p>}
            {error && <p className={cn(fieldErrorVariants())}>{error}</p>}
          </div>
        </div>
      )}
    />
  );
};
