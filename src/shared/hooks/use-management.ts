import { useCallback, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDisclosure } from '@/shared/hooks/use-disclosure';

interface UseManagementOptions<T, F> {
  resourceKey: string;
  fetchFn: (params: Record<string, unknown>) => Promise<PaginatedContent<T>>;
  initialFilters?: F;
}

export const useManagement = <T, F extends Record<string, unknown> = Record<string, unknown>>({
  resourceKey,
  fetchFn,
  initialFilters,
}: UseManagementOptions<T, F>) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<F>(initialFilters || ({} as F));
  const [selectedId, setSelectedId] = useState<Nullable<ID>>(null);
  const { isOpen, open, close } = useDisclosure();
  const { isOpen: isEditOpen, open: openEdit, close: closeEdit } = useDisclosure();

  const { data, isLoading } = useQuery({
    queryKey: [resourceKey, currentPage, filters],
    queryFn: () => fetchFn({ page: currentPage, ...filters }),
    placeholderData: (previousData) => previousData,
  });

  const handleFilterChange = useCallback((newFilters: F) => {
    setFilters(newFilters);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleSuccess = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: [resourceKey] });
  }, [queryClient, resourceKey]);

  const handleEdit = useCallback(
    (id: ID) => {
      setSelectedId(id);
      openEdit();
    },
    [openEdit]
  );

  const handleEditSuccess = useCallback(() => {
    handleSuccess();
    closeEdit();
  }, [handleSuccess, closeEdit]);

  return {
    data: data?.items ?? [],
    totalPages: data?.lastPage ?? 0,
    isLoading,

    pagination: {
      currentPage,
      handlePageChange,
    },

    filters: {
      handleFilterChange,
    },

    dialog: {
      isOpen,
      open,
      close,
      handleSuccess,
    },

    editDialog: {
      id: selectedId,
      isOpen: isEditOpen,
      open: handleEdit,
      close: closeEdit,
      handleSuccess: handleEditSuccess,
    },
  };
};
