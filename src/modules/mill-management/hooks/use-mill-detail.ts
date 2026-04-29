import { useQuery } from '@tanstack/react-query';
import { millService } from '../services/mill.service';

export const useMillDetail = (id: Nullable<ID>) => {
  return useQuery({
    queryKey: ['mills', id],
    queryFn: () => millService.getMillById(id!),
    enabled: !!id,
  });
};
