"use client"

import { usePortfolioStore } from "@/store";

const TabSwitch = () => {

    const store = usePortfolioStore();
    const tabs = ['Projects', 'Skills', 'Contact'];

    return (
        <div className="flex-wrap w-auto max-w-lg p-2 sm:p-4 gap-2 sm:gap-4 rounded sm:rounded-xl flex justify-center text-base sm:text-xl bg-black">
            {tabs.map(tab => {
                return (
                    <h1
                        key={tab}
                        className={`rounded cursor-pointer py-2 px-4 sm:py-3 sm:px-7 ${store.activeTab === tab && 'bg-mediumDark'}`}
                        onClick={() => store.switchTab(tab)}
                    >
                        {tab}
                    </h1>
                )
            })}
        </div>
    )
}

export default TabSwitch;