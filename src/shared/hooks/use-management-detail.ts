import { useQuery, useQueryClient } from '@tanstack/react-query';

interface UseManagementDetailOptions<T> {
  resourceKey: string;
  itemId: Nullable<ID>;
  fetchFn: (id: ID) => Promise<T>;
  enabled?: boolean;
  staleTime?: number;
}

export const useManagementDetail = <T extends { id: ID }>({
  resourceKey,
  itemId,
  fetchFn,
  enabled = true,
  staleTime = 0,
}: UseManagementDetailOptions<T>) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [resourceKey, 'detail', itemId],
    queryFn: () => fetchFn(itemId!),
    enabled: !!itemId && enabled,
    staleTime,
    initialData: () => {
      if (!itemId) return undefined;

      const queriesData = queryClient.getQueriesData<PaginatedContent<T>>({
        queryKey: [resourceKey],
      });

      for (const [, data] of queriesData) {
        const foundItem = data?.items?.find((item: T) => item.id === itemId);
        if (foundItem) return foundItem;
      }

      return undefined;
    },
  });
};
