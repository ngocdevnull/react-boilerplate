import { Button } from '@ui';
import { DynamicDialog } from '@/_widgets/ui/dialog/dialog';

interface DeactivateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  cancelLabel: string;
  confirmLabel: string;
  isLoading?: boolean;
}

export const DeactivateDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  cancelLabel,
  confirmLabel,
  isLoading,
}: DeactivateDialogProps) => {
  return (
    <DynamicDialog
      open={isOpen}
      onOpenChange={onClose}
      title={title}
      description={description}
      footer={
        <div className="flex w-full justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button variant="destructive" isLoading={isLoading} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      }
    />
  );
};
