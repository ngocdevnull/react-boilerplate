import type { VariantProps } from 'class-variance-authority';
import type { TextareaHTMLAttributes } from 'react';

import { textareaVariants } from './variant';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}
