export interface IPortfolioStore {
    activeTab: string,
    loading: boolean,
    switchTab(activeTab: string): {
      activeTab: string;
    };
    setLoading(loading: boolean): {
      loading: boolean;
    };
  }