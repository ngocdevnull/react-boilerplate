import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-border font-semibold text-black-40',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-14 w-14 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const avatarImageVariants = cva('h-full w-full object-cover');

export const avatarFallbackVariants = cva('flex h-full w-full items-center justify-center');
