import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { avatarVariants } from './variant';

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  delayMs?: number;
}
