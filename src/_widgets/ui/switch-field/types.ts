import type { Control, FieldValues, Path } from 'react-hook-form';

export interface SwitchFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  description?: string;
  error?: string;
  className?: string;
}
