import { IPortfolioStore } from '@/types/portfolioStore.interface';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { tabsSlice } from './slices/tabsSlice'

export const usePortfolioStore = create<IPortfolioStore>()(
  devtools(
    persist(
      (set) => ({
        ...tabsSlice(set)
      }),
      {
        name: 'portfolio-store',
      }
    )
  )
);