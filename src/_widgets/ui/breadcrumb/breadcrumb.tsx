import { Link } from 'react-router-dom';

import { cn } from '../../common/cn';

import type { BreadcrumbProps } from './types';
import {
  breadcrumbCurrentVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbListVariants,
  breadcrumbRootVariants,
} from './variant';

const DEFAULT_SEPARATOR = '/';
export const Breadcrumb = ({
  items,
  separator = DEFAULT_SEPARATOR,
  className,
  ...props
}: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={cn(breadcrumbRootVariants({ className }))} {...props}>
      <ol className={cn(breadcrumbListVariants())}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className={cn(breadcrumbItemVariants())}>
              {item.href && !isLast ? (
                <Link to={item.href} className={cn(breadcrumbLinkVariants())}>
                  {item.label}
                </Link>
              ) : item.onClick && !isLast ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={cn(breadcrumbLinkVariants())}
                >
                  {item.label}
                </button>
              ) : (
                <span className={cn(isLast && breadcrumbCurrentVariants())}>{item.label}</span>
              )}
              {!isLast && <span>{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
