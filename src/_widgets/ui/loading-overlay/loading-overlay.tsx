import { Loader2 } from 'lucide-react';

import { cn } from '../../common/cn';
import type { LoadingOverlayProps } from './types';
export const LoadingOverlay = ({ loading, className, spinnerSize = 40 }: LoadingOverlayProps) => {
  if (!loading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-black/20',
        'cursor-wait pointer-events-auto',
        className,
      )}
    >
      <Loader2 className="animate-spin text-primary" size={spinnerSize} aria-hidden />
    </div>
  );
};
