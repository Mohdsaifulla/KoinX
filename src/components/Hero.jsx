import React from "react";
import CryptoCurrencies from "./CryptoCurrencies";
import TrendingCoins from "./TrendingCoins";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="px-6 pt-10" style={{ flex: 2 }}>
        <CryptoCurrencies />
      </div>
      <div className="pt-16 p-4" style={{ flex: 1 }}>
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Hero;
