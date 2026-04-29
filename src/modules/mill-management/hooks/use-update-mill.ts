import { useMutation, useQueryClient } from '@tanstack/react-query';
import { millService } from '../services/mill.service';
import { millConverter } from '../converters/mill.converter';
import type { MillFormValues } from '../schema/mill-form.schema';

export const useUpdateMill = (id: ID) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: MillFormValues) =>
      millService.updateMill(id, millConverter.toUpdatePayload(values)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mills'] });
      queryClient.invalidateQueries({ queryKey: ['mills', id] });
    },
  });
};
