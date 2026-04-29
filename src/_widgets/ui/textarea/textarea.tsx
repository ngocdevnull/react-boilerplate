import * as React from 'react';

import { cn } from '../../common/cn';

import type { TextareaProps } from './types';
import { textareaVariants } from './variant';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ isError, className }))}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
