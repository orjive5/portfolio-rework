"use client"

import { usePortfolioStore } from "@/store";

const TabSwitch = () => {

    const store = usePortfolioStore();

    //       <button onClick={() => store.increase(1)}>increment bears</button>
    // const [activeTab, setActiveTab] = useState('Projects');

  // const setTab = (event) => {
  //   setActiveTab(event.target.innerText);
  // };

  return (
    <div className="tabs">
        <h1>{store.activeTab}</h1>
        {/* <h1 className={activeTab === 'Projects' ? 'active-tab' : ''} onClick={setTab}>
            Projects
        </h1>
        <h1 className={activeTab === 'Skills' ? 'active-tab' : ''} onClick={setTab}>
            Skills
        </h1>
        <h1 className={activeTab === 'Contact' ? 'active-tab' : ''} onClick={setTab}>
            Contact
        </h1> */}
    </div>
  )
}

export default TabSwitch;

// .tabs {
//   display: flex;
//   justify-content: center;
//   font-size: 1.3rem;
//   background-color: black;
//   border-radius: 20px;
//   gap: 20px;
//   padding: 18px 24px;
//   max-width: 500px;
// }

// .tabs h1 {
//   padding: 15px 30px;
//   border-radius: 4px;
//   cursor: pointer;
// }

// @media (max-width: 700px) {

//   .tabs {
//     flex-wrap: wrap;
//     width: auto;
//   }