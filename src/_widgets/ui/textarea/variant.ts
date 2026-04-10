import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'min-h-24 w-full rounded-input border border-border-primary bg-transparent px-3 py-2 text-sm text-primary outline-none transition-colors placeholder:text-black-40 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isError: {
        true: '!border-border-error-subtle focus:!border-border-error-subtle focus:!ring-1 focus:!ring-border-error-subtle',
        false: 'focus:border-input-focus focus:ring-1 focus:ring-input-focus',
      },
    },
    defaultVariants: {
      isError: false,
    },
  },
);
