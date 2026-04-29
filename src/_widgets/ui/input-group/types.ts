import type { ReactNode } from 'react';

export interface InputGroupProps {
  children: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
  isError?: boolean;
}
