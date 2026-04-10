import { useQuery } from '@tanstack/react-query';
import { millService } from '../services/mill.service';

export const useMillList = (params?: Record<string, unknown>) => {
  return useQuery({
    queryKey: ['mills', params],
    queryFn: () => millService.getMills(params),
    placeholderData: (previousData) => previousData,
  });
};
