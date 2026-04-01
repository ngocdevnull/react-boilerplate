import { create } from 'zustand';

import type { LoadingState } from '../types/loading.type';

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
