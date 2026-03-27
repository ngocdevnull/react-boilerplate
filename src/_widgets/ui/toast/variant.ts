import { cva } from 'class-variance-authority';

export const toastVariants = cva('flex w-full items-start gap-3 rounded-md border p-3 shadow-sm', {
  variants: {
    variant: {
      default: 'border-border bg-card text-black-10',
      success: 'border-success-foreground/30 bg-success text-success-foreground',
      error: 'border-error/30 bg-error/10 text-error',
      warning: 'border-warning-foreground/30 bg-warning text-warning-foreground',
      info: 'border-info-foreground/30 bg-info text-info-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const toastViewportVariants = cva('fixed right-4 top-4 z-[100] flex w-full max-w-sm flex-col gap-2');
