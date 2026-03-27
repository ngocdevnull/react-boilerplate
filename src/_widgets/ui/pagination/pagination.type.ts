import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { paginationVariants } from './variant';

export interface PaginationProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  disabled?: boolean;
  showPageInfo?: boolean;
}
