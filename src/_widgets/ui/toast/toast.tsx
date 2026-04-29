import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';

import { cn } from '../../common/cn';

import type { ToastProps, ToastViewportProps } from './types';
import { toastVariants, toastViewportVariants } from './variant';
import { Toaster } from './toaster';
import { useToast, toast } from './use-toast';

const ToastProvider = ToastPrimitive.Provider;
export const Toast = ({
  title,
  message,
  icon,
  action,
  onClose,
  variant = 'default',
  className,
  open,
  defaultOpen,
  duration,
  onOpenChange,
}: ToastProps) => {
  return (
    <ToastPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      duration={duration}
      onOpenChange={onOpenChange}
      className={cn(toastVariants({ variant, className }), 'relative')}
    >
      {icon && <div className="mt-1">{icon}</div>}
      <div className="flex-1 pr-6">
        {title && (
          <ToastPrimitive.Title className="text-sm font-semibold text-primary block">
            {title}
          </ToastPrimitive.Title>
        )}
        {message && (
          <ToastPrimitive.Description className="text-sm font-normal text-text-secondary mt-1 block">
            {message}
          </ToastPrimitive.Description>
        )}
        {action && (
          <div className="mt-3">
            <ToastPrimitive.Action altText="Toast Action">{action}</ToastPrimitive.Action>
          </div>
        )}
      </div>
      <ToastPrimitive.Close asChild>
        <button
          type="button"
          onClick={() => onClose?.()}
          className="absolute right-4 top-5 rounded p-1 text-text-secondary transition-colors hover:bg-black/5 cursor-pointer"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};
export const ToastViewport = ({ className }: ToastViewportProps) => {
  return <ToastPrimitive.Viewport className={cn(toastViewportVariants({ className }))} />;
};

export { ToastProvider, Toaster, useToast, toast };
