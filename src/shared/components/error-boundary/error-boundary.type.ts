import type { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  moduleName: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
