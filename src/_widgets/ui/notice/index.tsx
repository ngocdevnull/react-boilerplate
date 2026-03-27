import * as React from 'react';
import { X } from 'lucide-react';

import { cn } from '../../common/cn';
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
          <button
            type="button"
            onClick={onClose}
            className="ml-3 flex-shrink-0 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  },
);
Notice.displayName = 'Notice';

export { Notice, noticeVariants };
