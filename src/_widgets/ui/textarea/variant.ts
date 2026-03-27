import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'min-h-24 w-full rounded-[5px] border bg-auth-bg px-3 py-2 text-sm text-black-10 outline-none transition-colors placeholder:text-black-40 disabled:cursor-not-allowed disabled:opacity-50',
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
