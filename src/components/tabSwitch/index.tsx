"use client"

import { usePortfolioStore } from "@/store";

const TabSwitch = () => {

    const store = usePortfolioStore();
    const tabs = ['Projects', 'Skills', 'Contact'];

    return (
        <div className="w-auto flex-wrap max-w-lg p-4 gap-5 rounded-2xl flex justify-center text-xl bg-black">
            {tabs.map(tab => {
                return (
                    <h1
                        key={tab}
                        className={`rounded cursor-pointer py-3 px-7 ${store.activeTab === tab && 'bg-mediumDark'}`}
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