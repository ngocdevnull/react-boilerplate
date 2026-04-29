import { useMutation, useQueryClient } from '@tanstack/react-query';
import { millService } from '../services/mill.service';

export const useUpdateMillStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: ID; status: string }) => millService.updateMillStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mills'] });
    },
  });
};
