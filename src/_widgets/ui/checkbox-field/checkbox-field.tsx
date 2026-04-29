import { Controller, type FieldValues } from 'react-hook-form';
import { Label } from '../label/label';
import { Checkbox } from '../checkbox/checkbox';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import type { CheckboxFieldProps } from './types';
export const CheckboxField = <T extends FieldValues>({
  name,
  control,
  options,
  label,
  required = false,
  error,
  hint,
  className,
}: CheckboxFieldProps<T>) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && options && (
        <Label className="mb-0.5 ml-0.5">
          {label}
          {required && <span className={cn(fieldAsteriskVariants())}>*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (options) {
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option) => {
                  const value = (field.value as string[]) || [];
                  const isChecked = value.includes(option.value);
                  const id = `${name}-${option.value}`;

                  return (
                    <div
                      key={option.value}
                      className={cn(
                        'group relative flex items-center gap-3 border rounded-input h-input px-4 transition-colors',
                        isChecked ? 'border-brand-green bg-brand-green/5' : 'border-border-primary',
                      )}
                    >
                      <Checkbox
                        id={id}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...value, option.value]
                            : value.filter((v: string) => v !== option.value);
                          field.onChange(newValue);
                        }}
                      />

                      <Label
                        htmlFor={id}
                        className="flex-1 cursor-pointer font-medium text-text-secondary select-none py-3"
                      >
                        {option.label}
                      </Label>
                    </div>
                  );
                })}
              </div>
            );
          }

          return (
            <div className="flex items-center gap-2">
              <Checkbox
                id={name}
                checked={!!field.value}
                onCheckedChange={field.onChange}
              />
              {label && (
                <Label htmlFor={name} className="cursor-pointer select-none">
                  {label}
                </Label>
              )}
            </div>
          );
        }}
      />

      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </div>
  );
};
