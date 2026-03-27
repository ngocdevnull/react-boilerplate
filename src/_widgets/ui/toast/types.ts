import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { toastVariants, toastViewportVariants } from './variant';

export interface ToastProps extends VariantProps<typeof toastVariants> {
  title?: string;
  message?: string;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  className?: string;
  open?: boolean;
  defaultOpen?: boolean;
  duration?: number;
  onOpenChange?: (open: boolean) => void;
}

export interface ToastViewportProps extends VariantProps<typeof toastViewportVariants> {
  className?: string;
}
