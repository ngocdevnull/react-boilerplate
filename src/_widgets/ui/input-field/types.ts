import type { ReactNode } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface InputFieldProps<T extends FieldValues = FieldValues> {
  name?: FieldPath<T>;
  control?: Control<T>;
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  placeholder?: string;
  type?: string;
  variant?: 'default' | 'borderless';
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: () => void;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  children?: ReactNode;
  className?: string;
  inputClassName?: string;
}
