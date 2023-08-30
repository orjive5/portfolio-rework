export interface IPortfolioStore {
    activeTab: string,
    switchTab(activeTab: string): {
      activeTab: string;
    };
  }