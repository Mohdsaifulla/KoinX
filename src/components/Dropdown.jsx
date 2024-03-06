import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


const Dropdown = ( {handleCoinId }) => {
  return (
    <div className="flex gap-2 pb-4">
      <div className="flex justify-center items-center">
        <div>
          <p>Cryptocurrency</p>
        </div>
        <IoIosArrowForward />
      </div>
      <div>
        <select
          name="selectCoin"
          style={{ width: "fit-content" }}
          onChange={handleCoinId}
        >
          <option value="bitcoin">Bitcoin (BTC) </option>
          <option value="avalanche-2">Avalanche (AVAX)</option>

          <option value="dogecoin">Dogecoin (DOGE)</option>
          <option value="ethereum">Ethereum (ETH)</option>
          <option value="solana">Solana (SOL)</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
