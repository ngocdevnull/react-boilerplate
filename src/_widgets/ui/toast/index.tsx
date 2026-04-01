import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';

import { cn } from '../../common/cn';

import type { ToastProps, ToastViewportProps } from './toast.type';
import { toastVariants, toastViewportVariants } from './variant';
import { Toaster } from './toaster';
import { useToast, toast } from './use-toast';

const ToastProvider = ToastPrimitive.Provider;

export function Toast({
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
}: ToastProps) {
  return (
    <ToastPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      duration={duration}
      onOpenChange={onOpenChange}
      className={cn(toastVariants({ variant, className }))}
    >
      {icon && <div className="mt-0.5">{icon}</div>}
      <div className="flex-1 space-y-1">
        {title && <ToastPrimitive.Title className="text-sm font-semibold">{title}</ToastPrimitive.Title>}
        {message && (
          <ToastPrimitive.Description className="text-sm leading-5">
            {message}
          </ToastPrimitive.Description>
        )}
        {action && <ToastPrimitive.Action altText="Toast Action">{action}</ToastPrimitive.Action>}
      </div>
      <ToastPrimitive.Close asChild>
        <button
          type="button"
          onClick={() => onClose?.()}
          className="rounded p-1 text-current/70 transition-colors hover:bg-black/5 hover:text-current"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}

export function ToastViewport({ className }: ToastViewportProps) {
  return (
    <ToastPrimitive.Viewport className={cn(toastViewportVariants({ className }))} />
  );
}

export { ToastProvider, Toaster, useToast, toast };

