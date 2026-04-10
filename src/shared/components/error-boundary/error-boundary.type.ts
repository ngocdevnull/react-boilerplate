import type { ReactNode } from 'react';
import type { FallbackProps } from 'react-error-boundary';

export interface ErrorBoundaryProps {
  children: ReactNode;
  moduleName: string;
}

export interface ErrorBoundaryFallbackProps extends FallbackProps {
  moduleName: string;
}
