import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../../common/cn';

import type { TooltipProps } from './types';
import { tooltipContentVariants, tooltipRootVariants } from './variant';

export function Tooltip({ content, children, side = 'top', className, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span className={cn(tooltipRootVariants({ className }))} {...props}>
            {children}
          </span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={8}
            className={cn(tooltipContentVariants({ side }))}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
