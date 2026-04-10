import { useToast } from './use-toast';
import { Toast, ToastViewport } from './toast';
export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(({ id, title, message, action, ...props }) => {
        return <Toast key={id} title={title} message={message} action={action} {...props} />;
      })}
      <ToastViewport />
    </>
  );
};
