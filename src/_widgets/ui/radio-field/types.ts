import type { Control, FieldValues, Path } from 'react-hook-form';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: RadioOption[];
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}
