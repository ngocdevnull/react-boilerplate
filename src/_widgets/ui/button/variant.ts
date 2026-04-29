import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-button text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-brand-green text-primary-foreground hover:bg-brand-green/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-brand-green underline-offset-4 hover:underline',
        'tab-default': 'bg-transparent hover:bg-gray-200 text-gray-400',
        'tab-selected': 'bg-gray-200 text-black',
      },
      size: {
        default: 'h-button px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-button rounded-md px-8',
        icon: 'h-button w-button',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
