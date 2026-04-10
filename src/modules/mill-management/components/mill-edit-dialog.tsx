import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, useToast } from '@ui';

import { useUpdateMill } from '../hooks/use-update-mill';
import { useMillDetail } from '../hooks/use-mill-detail';
import { type MillFormValues } from '../schema/mill-form.schema';
import { millConverter } from '../converters/mill.converter';
import { MillForm } from './mill-form';

interface MillEditDialogProps {
  millId: Nullable<ID>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const MillEditDialog = ({ millId, open, onOpenChange, onSuccess }: MillEditDialogProps) => {
  const { t } = useTranslation(['millManagement', 'common']);
  const { toast } = useToast();
  const { mutateAsync: updateMill, isPending: isUpdating } = useUpdateMill(millId!);

  const { data: mill, isLoading: isFetchingMill } = useMillDetail(millId);

  const onSubmit = async (values: MillFormValues) => {
    if (!millId) return;
    try {
      await updateMill(values);
      toast({
        variant: 'success',
        title: t('editMill.successTitle'),
        message: t('editMill.successDescription'),
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
            <DialogTitle>{t('editMill.title')}</DialogTitle>
            <DialogDescription className="sr-only">{t('editMill.title')}</DialogDescription>
          </DialogHeader>

          {isFetchingMill && !mill ? (
            <Loader2 className="h-8 w-8 animate-spin text-brand-green" />
          ) : (
            <MillForm
              isEdit
              defaultValues={
                mill ? millConverter.toFormValues(millConverter.toRows([mill])[0]) : undefined
              }
              onSubmit={onSubmit}
              onCancel={() => onOpenChange(false)}
              isLoading={isUpdating}
              submitLabel={t('editMill.submit')}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
