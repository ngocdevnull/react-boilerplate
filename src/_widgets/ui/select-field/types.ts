import type { Control, FieldValues, Path } from 'react-hook-form';

export interface SelectFieldOption {
  label: string;
  value: string | number;
}

export interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: SelectFieldOption[] | readonly SelectFieldOption[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  disabled?: boolean;
}
