import { ManagementBase } from '@shared/components/management/management-base';
import { useManagement } from '@/shared/hooks/use-management';

import { MillManagementFilter } from './components/mill-management-filter';
import { MillManagementHeader } from './components/mill-management-header';
import { MillManagementTable } from './components/mill-management-table';
import { MillNewDialog } from './components/mill-new-dialog';
import { MillEditDialog } from './components/mill-edit-dialog';
import { millService } from './services/mill.service';

export const MillManagementPage = () => {
  const { data, isLoading, totalPages, pagination, filters, dialog, editDialog } = useManagement({
    resourceKey: 'mills',
    fetchFn: millService.getMills,
  });

  return (
    <ManagementBase
      header={<MillManagementHeader onNewMill={dialog.open} />}
      filter={<MillManagementFilter onFilterChange={filters.handleFilterChange} />}
      table={
        <MillManagementTable
          data={data}
          isLoading={isLoading}
          currentPage={pagination.currentPage}
          totalPages={totalPages}
          onPageChange={pagination.handlePageChange}
          onEdit={(mill) => editDialog.open(mill.id)}
        />
      }
      createDialog={
        <MillNewDialog
          open={dialog.isOpen}
          onOpenChange={dialog.close}
          onSuccess={dialog.handleSuccess}
        />
      }
      editDialog={
        <MillEditDialog
          millId={editDialog.id}
          open={editDialog.isOpen}
          onOpenChange={editDialog.close}
          onSuccess={editDialog.handleSuccess}
        />
      }
    />
  );
};
