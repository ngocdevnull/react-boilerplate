import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'flex w-[400px] h-[78px] items-center gap-4 rounded-toast border border-border-secondary-alt bg-white p-4 shadow-toast transition-all',
  {
    variants: {
      variant: {
        default: 'text-primary',
        success: 'text-success',
        error: 'text-error',
        warning: 'text-warning',
        info: 'text-info',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const toastViewportVariants = cva(
  'fixed right-4 top-4 z-[100] flex w-fit flex-col gap-2'
);

