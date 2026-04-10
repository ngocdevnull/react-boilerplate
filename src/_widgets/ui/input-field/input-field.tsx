import { Controller, type FieldValues } from 'react-hook-form';

import { Label } from '../label/label';
import { Input } from '../input/input';
import { InputPassword } from '../input-password/input-password';
import { InputGroup } from '../input-group/input-group';
import { cn } from '../../common/cn';
import {
  fieldAsteriskVariants,
  fieldErrorVariants,
  fieldHintVariants,
} from '../common/field-shared.variant';
import type { InputFieldProps } from './types';
import { inputFieldVariants } from './variant';

export const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  htmlFor,
  required = false,
  hint,
  error,
  placeholder,
  type = 'text',
  variant,
  readOnly,
  disabled,
  onFocus,
  leftAddon,
  rightAddon,
  children,
  className,
  inputClassName,
}: InputFieldProps<T>) => {
  return (
    <div className={cn(inputFieldVariants({ className }))}>
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
          render={({ field }) => {
            const inputProps = {
              ...field,
              value: field.value ?? '',
              placeholder,
              disabled,
              readOnly,
              variant,
              isError: !!error,
              className: inputClassName,
              onFocus,
            };

            const renderInput = () => {
              if (type === 'password') {
                return <InputPassword {...inputProps} />;
              }
              return <Input {...inputProps} type={type} />;
            };

            if (leftAddon || rightAddon) {
              return (
                <InputGroup leftAddon={leftAddon} rightAddon={rightAddon} isError={!!error}>
                  {renderInput()}
                </InputGroup>
              );
            }

            return renderInput();
          }}
        />
      ) : (
        <div>{children}</div>
      )}

      {error ? (
        <p className={cn(fieldErrorVariants())}>{error}</p>
      ) : hint ? (
        <p className={cn(fieldHintVariants())}>{hint}</p>
      ) : null}
    </div>
  );
};
