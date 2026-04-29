import type { ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface CheckboxOption {
  label: string;
  value: string;
}

export interface CheckboxFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options?: CheckboxOption[];
  label?: ReactNode;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
}
