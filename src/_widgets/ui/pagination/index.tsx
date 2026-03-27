import { Button } from '../button';

import { cn } from '../../common/cn';

import type { PaginationProps } from './pagination.type';
import { paginationEllipsisVariants, paginationInfoVariants, paginationVariants } from './variant';

const PREVIOUS_LABEL = 'Previous';
const NEXT_LABEL = 'Next';

function buildPages(currentPage: number, totalPages: number, siblingCount: number): Array<number | '...'> {
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
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  disabled = false,
  showPageInfo = true,
  className,
  ...props
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const safeCurrent = Math.min(Math.max(currentPage, 1), totalPages);
  const pages = buildPages(safeCurrent, totalPages, siblingCount);
  const isPrevDisabled = disabled || safeCurrent <= 1;
  const isNextDisabled = disabled || safeCurrent >= totalPages;

  return (
    <nav
      aria-label="Pagination Navigation"
      className={cn(paginationVariants({ className }))}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={isPrevDisabled}
          onClick={() => onPageChange(safeCurrent - 1)}
        >
          {PREVIOUS_LABEL}
        </Button>
        <div className="flex items-center gap-1">
          {pages.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className={cn(paginationEllipsisVariants())}>
                  ...
                </span>
              );
            }

            const isActive = page === safeCurrent;

            return (
              <Button
                key={page}
                type="button"
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                disabled={disabled}
                className={cn('min-w-9 px-3', isActive && 'pointer-events-none')}
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            );
          })}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={isNextDisabled}
          onClick={() => onPageChange(safeCurrent + 1)}
        >
          {NEXT_LABEL}
        </Button>
      </div>

      {showPageInfo && (
        <p className={cn(paginationInfoVariants())}>
          Page {safeCurrent} of {totalPages}
        </p>
      )}
    </nav>
  );
}
