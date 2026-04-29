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

export type ToasterToast = ToastProps & {
  id: ID;
};

export const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

export type ToastActionType = typeof actionTypes;

export type Action =
  | {
      type: ToastActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ToastActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ToastActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ToastActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

export interface ToastState {
  toasts: ToasterToast[];
}

export type Toast = Omit<ToasterToast, 'id'>;
