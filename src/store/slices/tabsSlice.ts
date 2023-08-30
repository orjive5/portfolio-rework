import { IPortfolioStore } from "@/types/portfolioStore.interface";

export const tabsSlice = (set: any): IPortfolioStore => ({
    bears: 0,
    increase: (by) => set((state: IPortfolioStore) => ({ bears: state.bears + by })),
});