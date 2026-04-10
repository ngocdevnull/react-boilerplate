import { cva } from 'class-variance-authority';

export const datePickerVariants = cva(
  'flex h-12 w-full rounded-[5px] border bg-auth-bg px-3 py-2 text-sm text-primary outline-none transition-colors',
  {
    variants: {
      isError: {
        true: 'border-error focus:border-error focus:ring-error',
        false: 'border-auth-input-border focus:border-secondary focus:ring-1 focus:ring-secondary',
      },
    },
    defaultVariants: {
      isError: false,
    },
  },
);
