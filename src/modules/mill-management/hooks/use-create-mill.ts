import { useMutation, useQueryClient } from '@tanstack/react-query';
import { millApi } from '@/core/apis/mill.api';
import { millConverter } from '../converters/mill.converter';
import type { MillFormValues } from '../schema/mill-form.schema';

export const useCreateMill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: MillFormValues) => millApi.create(millConverter.toCreatePayload(values)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mills'] });
    },
  });
};
