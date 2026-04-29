import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, useToast } from '@ui';

import { useCreateMill } from '../hooks/use-create-mill';
import { type MillFormValues } from '../schema/mill-form.schema';
import { MillForm } from './mill-form';

interface MillNewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const MillNewDialog = ({ open, onOpenChange, onSuccess }: MillNewDialogProps) => {
  const { t } = useTranslation(['millManagement', 'common']);
  const { toast } = useToast();
  const { mutateAsync: createMill, isPending } = useCreateMill();

  const onSubmit = async (values: MillFormValues) => {
    try {
      await createMill(values);
      toast({
        variant: 'success',
        title: t('common:success.title'),
        message: t('newMill.successDescription', { name: values.name }),
      });
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden font-outfit">
        <div className="max-h-[90vh] overflow-y-auto p-6 flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>{t('newMill.title')}</DialogTitle>
            <DialogDescription className="sr-only">{t('newMill.title')}</DialogDescription>
          </DialogHeader>

          <MillForm
            onSubmit={onSubmit}
            onCancel={() => onOpenChange(false)}
            isLoading={isPending}
            submitLabel={t('newMill.submit')}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
