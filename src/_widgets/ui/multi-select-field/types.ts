import type { Control, FieldValues, Path } from 'react-hook-form';
import type { Option } from '../multi-select/types';

export interface MultiSelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: readonly Option[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  disabled?: boolean;
}
