import * as React from 'react';

import { cn } from '../../common/cn';

import type { InputGroupProps } from './types';
export const InputGroup = ({
  children,
  leftAddon,
  rightAddon,
  className,
  isError,
}: InputGroupProps) => {
  const commonAddonClass =
    'flex items-center px-3 text-sm text-text-tertiary whitespace-nowrap transition-colors bg-transparent';

  return (
    <div
      className={cn(
        'group flex h-input items-stretch w-full rounded-input border border-border-primary bg-background shadow-default transition-all overflow-hidden',
        'focus-within:border-input-focus focus-within:ring-1 focus-within:ring-inset focus-within:ring-input-focus',
        isError &&
          'border-error-secondary focus-within:border-error-secondary focus-within:ring-error-secondary',
        className,
      )}
    >
      {leftAddon && (
        <>
          <span className={cn(commonAddonClass)}>{leftAddon}</span>
          <div
            className={cn(
              'w-[1px] bg-border-primary shrink-0 transition-colors',
              isError && 'bg-error-secondary',
              'group-focus-within:bg-input-focus',
            )}
          />
        </>
      )}

      <div className="flex-1 [&_div]:h-full [&_div]:!border-none [&_div]:!ring-0 [&_input]:h-full [&_input]:w-full [&_input]:bg-transparent [&_input]:!border-none [&_input]:!shadow-none [&_input]:!ring-0 [&_input]:focus:!ring-0 [&_input]:focus-visible:!ring-0 [&_input]:focus:!border-none [&_input]:focus-visible:!border-none [&_input]:rounded-none">
        {children}
      </div>

      {rightAddon && (
        <>
          <div
            className={cn(
              'w-[1px] bg-border-primary shrink-0 transition-colors',
              isError && 'bg-error-secondary',
              'group-focus-within:bg-input-focus',
            )}
          />
          <span className={cn(commonAddonClass)}>{rightAddon}</span>
        </>
      )}
    </div>
  );
};
