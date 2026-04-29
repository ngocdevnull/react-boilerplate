import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva('grid gap-2');

export const radioGroupItemVariants = cva(
  'group flex items-center w-full h-[44px] gap-3 rounded-input border border-border-primary bg-transparent px-4 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green/5',
  {
    variants: {
      isError: {
        true: '!border-error',
      },
    },
  },
);
