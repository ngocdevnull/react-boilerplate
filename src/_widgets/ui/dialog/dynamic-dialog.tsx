import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog-primitives';
import type { DynamicDialogProps } from './types';

export const DynamicDialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: DynamicDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={className}>
        {(title || description) && (
          <DialogHeader className="mb-2">
            {title && (
              <DialogTitle className="text-xl font-bold text-gray-800">{title}</DialogTitle>
            )}
            {description && (
              <DialogDescription className="text-gray-500">{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        <div className="flex flex-col gap-4 py-2">{children}</div>
        {footer && <DialogFooter className="mt-4">{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};
