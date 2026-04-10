import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Loader2, Pencil } from 'lucide-react';

import { cn } from '@/_widgets/common/cn';
import type { TableColumn } from '@/_widgets/ui/table/types';
import { STATUS, STATUS_KEY } from '@/shared/constants/status.constant';
import { DeactivateDialog } from '@/shared/components/dialog/deactivate-dialog';
import { ReactivateDialog } from '@/shared/components/dialog/reactivate-dialog';
import { Badge, Button, DataTable, Pagination } from '@ui';

import type { MillManagementTableProps } from '../types/mill-management-table.type';
import type { MillManagementRow } from '../types/mill-management-row.type';
import { MILL_MANAGEMENT_PAGE_SIZE } from '../constants/mill-management-table.constant';
import { useUpdateMillStatus } from '../hooks/use-update-mill-status';

export const MillManagementTable = ({
  data,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onEdit,
}: MillManagementTableProps) => {
  const { t } = useTranslation(['millManagement', 'common']);
  const indexOffset = (currentPage - 1) * MILL_MANAGEMENT_PAGE_SIZE;

  const [deactivateMill, setDeactivateMill] = useState<Nullable<MillManagementRow>>(null);
  const [reactivateMill, setReactivateMill] = useState<Nullable<MillManagementRow>>(null);

  const { mutate: updateStatus, isPending: isUpdating } = useUpdateMillStatus();

  const handleUpdateStatus = (
    mill: MillManagementRow,
    status: (typeof STATUS)[keyof typeof STATUS],
  ) => {
    updateStatus(
      { id: mill.id, status },
      {
        onSuccess: () => {
          setDeactivateMill(null);
          setReactivateMill(null);
        },
      },
    );
  };

  const handleRowClick = (row: MillManagementRow) => {
    if (row.status === STATUS_KEY.INACTIVE) {
      setReactivateMill(row);
    }
  };

  const columns = useMemo((): TableColumn<MillManagementRow>[] => {
    return [
      {
        key: '__index',
        header: t('table.index'),
        className: 'w-12 text-center',
        headerClassName: 'text-center',
        render: (_row, rowIndex) => String(indexOffset + rowIndex + 1),
      },
      { key: 'name', header: t('table.millName') },
      { key: 'country', header: t('table.country') },
      { key: 'address', header: t('table.address') },
      {
        key: 'status',
        header: t('table.status'),
        render: (row) => {
          let variant: 'success' | 'warning' | 'gray';

          switch (row.status) {
            case STATUS_KEY.ACTIVE:
              variant = 'success';
              break;
            case STATUS_KEY.PENDING:
              variant = 'warning';
              break;
            case STATUS_KEY.INACTIVE:
              variant = 'gray';
              break;
            default:
              variant = 'gray';
              break;
          }

          return (
            <Badge
              variant={variant}
              className={cn(
                'capitalize px-2.5 py-1',
                row.status !== STATUS_KEY.PENDING &&
                  'cursor-pointer hover:opacity-80 transition-opacity',
              )}
              onClick={(e) => {
                e.stopPropagation();
                if (row.status === STATUS_KEY.ACTIVE) setDeactivateMill(row);
                if (row.status === STATUS_KEY.INACTIVE) setReactivateMill(row);
              }}
            >
              {t(`common:statusValues.${row.status}`)}
              {row.status !== STATUS_KEY.PENDING && <ChevronRight className="ml-1 h-3.5 w-3.5" />}
            </Badge>
          );
        },
      },
      { key: 'dailyCycle', header: t('table.dailyCycle') },
      { key: 'expectedCapacity', header: t('table.expectedCapacity') },
      {
        key: '__action',
        header: t('table.action'),
        className: 'w-24',
        render: (row) => (
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-brand-green"
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(row);
              }}
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ];
  }, [t, indexOffset, onEdit]);

  if (isLoading) {
    return <Loader2 className="h-8 w-8 animate-spin text-brand-green" />;
  }

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        rowKey="id"
        emptyMessage={t('table.empty')}
        onRowClick={handleRowClick}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

      <DeactivateDialog
        isOpen={!!deactivateMill}
        title={t('deactivate.title')}
        description={t('deactivate.confirm', { name: deactivateMill?.name })}
        confirmLabel={t('deactivate.submit')}
        cancelLabel={t('common:action.cancel')}
        isLoading={isUpdating}
        onClose={() => setDeactivateMill(null)}
        onConfirm={() => deactivateMill && handleUpdateStatus(deactivateMill, STATUS.INACTIVE)}
      />

      <ReactivateDialog
        isOpen={!!reactivateMill}
        title={t('reactivate.title')}
        description={t('reactivate.confirm', { name: reactivateMill?.name })}
        confirmLabel={t('reactivate.submit')}
        cancelLabel={t('common:action.cancel')}
        isLoading={isUpdating}
        onClose={() => setReactivateMill(null)}
        onConfirm={() => reactivateMill && handleUpdateStatus(reactivateMill, STATUS.ACTIVE)}
      />
    </>
  );
};
