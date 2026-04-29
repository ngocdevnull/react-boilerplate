import { Control, FieldValues, Path } from 'react-hook-form';
import type { TextareaProps } from '../textarea/types';

export interface TextareaFieldProps<T extends FieldValues = FieldValues> extends TextareaProps {
  name?: Path<T>;
  control?: Control<T>;
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  textareaClassName?: string;
}
