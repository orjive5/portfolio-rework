import { IPortfolioStore } from "@/types/portfolioStore.interface";

export const tabsSlice = (set: any): IPortfolioStore => ({
    activeTab: 'Projects',
    switchTab: (state: string) =>
		set(() => ({ activeTab: state })),
});