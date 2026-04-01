import { useToast } from './use-toast';
import { Toast, ToastViewport } from './index';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(function ({ id, title, message, action, ...props }) {
        return (
          <Toast key={id} title={title} message={message} action={action} {...props} />
        );
      })}
      <ToastViewport />
    </>
  );
}
