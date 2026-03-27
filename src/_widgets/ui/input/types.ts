import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { inputVariants } from './variant';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}
