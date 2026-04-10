import { Button } from '@ui';
import { DynamicDialog } from '@/_widgets/ui/dialog/dialog';

interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export const LogoutDialog = ({ isOpen, onClose, onConfirm, isLoading }: LogoutDialogProps) => {
  return (
    <DynamicDialog
      open={isOpen}
      onOpenChange={onClose}
      title="Are you sure you want to log out?"
      footer={
        <div className="flex w-full gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="default" onClick={onConfirm} className="flex-1" isLoading={isLoading}>
            Log out
          </Button>
        </div>
      }
    />
  );
};
