import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '../button/button';

import { cn } from '../../common/cn';

import type { PaginationProps } from './types';
import { paginationEllipsisVariants, paginationVariants } from './variant';

const PREVIOUS_LABEL = 'Previous';
const NEXT_LABEL = 'Next';
const buildPages = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): Array<number | '...'> => {
  const pages: Array<number | '...'> = [];
  const left = Math.max(1, currentPage - siblingCount);
  const right = Math.min(totalPages, currentPage + siblingCount);

  if (left > 1) {
    pages.push(1);
    if (left > 2) pages.push('...');
  }

  for (let page = left; page <= right; page += 1) {
    pages.push(page);
  }

  if (right < totalPages) {
    if (right < totalPages - 1) pages.push('...');
    pages.push(totalPages);
  }

  return pages;
};
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  disabled = false,
  className,
  ...props
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const safeCurrent = Math.min(Math.max(currentPage, 1), totalPages);
  const pages = buildPages(safeCurrent, totalPages, siblingCount);
  const isPrevDisabled = disabled || safeCurrent <= 1;
  const isNextDisabled = disabled || safeCurrent >= totalPages;

  return (
    <nav
      aria-label="Pagination Navigation"
      className={cn(paginationVariants({ className }), 'w-full')}
      {...props}
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        disabled={isPrevDisabled}
        onClick={() => onPageChange(safeCurrent - 1)}
      >
        <ArrowLeft className="h-4 w-4" />
        {PREVIOUS_LABEL}
      </Button>

      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className={cn(
                  paginationEllipsisVariants(),
                  'flex h-10 w-10 items-center justify-center',
                )}
              >
                ...
              </span>
            );
          }

          const isActive = page === safeCurrent;

          return (
            <button
              key={page}
              type="button"
              disabled={disabled}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer',
                isActive
                  ? 'bg-brand-green text-white'
                  : 'text-black-60 hover:bg-black-5 hover:text-black',
                disabled && 'pointer-events-none cursor-not-allowed opacity-50',
              )}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        disabled={isNextDisabled}
        onClick={() => onPageChange(safeCurrent + 1)}
      >
        {NEXT_LABEL}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};
