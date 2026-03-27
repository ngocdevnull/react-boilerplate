import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { breadcrumbRootVariants } from './variant';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbRootVariants> {
  items: BreadcrumbItem[];
  separator?: string;
}
