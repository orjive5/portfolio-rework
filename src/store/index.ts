import { IPortfolioStore } from '@/types/portfolioStore.interface';
import { create } from 'zustand'
import { tabsSlice } from './slices/tabsSlice'

export const usePortfolioStore = create<IPortfolioStore>()(
    (set) => ({
      ...tabsSlice(set)
    }),
);