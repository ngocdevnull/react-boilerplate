import { cva } from 'class-variance-authority';

export const fieldErrorVariants = cva('text-xs text-error mt-1');

export const fieldHintVariants = cva('text-xs text-black-40 mt-1');

export const fieldAsteriskVariants = cva('ml-1 text-error');
