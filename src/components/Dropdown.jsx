import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Dropdown = ({ handleCoinId }) => {
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
          className="border-none rounded-lg p-[0.4px] bg-transparent"
        >
          <option value="bitcoin" className="text-black">
            Bitcoin (BTC){" "}
          </option>
          <option value="avalanche-2" className="text-black">
            Avalanche (AVAX)
          </option>

          <option value="dogecoin" className="text-black">
            Dogecoin (DOGE)
          </option>
          <option value="ethereum" className="text-black">
            Ethereum (ETH)
          </option>
          <option value="solana" className="text-black">
            Solana (SOL)
          </option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
