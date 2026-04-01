import type { ReactNode } from 'react';

export interface CheckboxFieldProps {
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}
