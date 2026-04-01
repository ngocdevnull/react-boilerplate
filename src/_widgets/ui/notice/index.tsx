import * as React from 'react';
import { X } from 'lucide-react';

import { cn } from '../../common/cn';
import { Button } from '../button';
import { noticeVariants } from './variant';
import type { NoticeProps } from './types';

const Notice = React.forwardRef<HTMLDivElement, NoticeProps>(
  ({ className, variant, align, size, icon, title, children, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(noticeVariants({ variant, align, size, className }))}
        {...props}
      >
        {icon && <div className="mr-3 flex-shrink-0 flex items-start mt-[2px]">{icon}</div>}
        <div className="flex-1 flex flex-col gap-1">
          {title && <h5 className="font-semibold leading-none tracking-tight">{title}</h5>}
          <div className="leading-relaxed">{children}</div>
        </div>
        {onClose && (
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            className="h-8 w-8 p-0 ml-3 flex-shrink-0 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
    );
  },
);
Notice.displayName = 'Notice';

export { Notice, noticeVariants };
