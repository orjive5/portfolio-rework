'use client'

import { usePortfolioStore } from "@/store";

const Footer = () => {
  const store = usePortfolioStore();
  return (
    <footer>
      <h2>{store.bears}</h2>
      <button onClick={() => store.increase(1)}>increment bears</button>
      <h1>© German Dojcinovic 2023 All rights reserved</h1>
    </footer>
  );
};

export default Footer;