import React from "react";
import useFetchTrending from "../hooks/useFetchTrending";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const TrendingCoins = () => {
  const TrendingCoin = useFetchTrending();
  return (
    <div className="pt-8 flex flex-col gap-8">
      <div className="bg-blue-600 rounded-lg text-white text-xl">
        <div className="p-2 flex flex-col justify-center items-center">
          <h1 className="font-semibold text-center">Get Started With KoinX</h1>
          <h1 className="font-semibold">for FREE</h1>
          <p className="text-center">
            With our range of features that you can equipe for free, KoinX
            allows you to be more educated and aware of your tax reports
          </p>
        </div>
        <div className="">
          <img src="/images/social.jpg" className="p-6" />
        </div>
        <div className="flex justify-center items-center pb-6">
          <button className="bg-white text-black p-2 pt-2 m-1 rounded-lg font-semibold">
            Get Started for FREE
          </button>
        </div>
      </div>
      <div className="shadow-xl rounded-lg">
        <div>
          <h1 className="p-2">Trending Coins (24h)</h1>
          <div>
            {TrendingCoin?.coins?.slice(0, 3).map((item) => (
              <div className="flex justify-between items-center p-2">
                <div className="flex gap-2 justify-start items-center">
                  <span>
                    <img
                      src={item?.item?.thumb}
                      className="w-10 rounded-full"
                    />
                  </span>
                  <span>{item?.item?.name}</span>
                  <span>({item?.item?.symbol})</span>
                </div>
                <div className="flex justify-center items-center">
                  {item?.item?.data?.price_change_percentage_24h?.usd > 0 ? (
                    <span>
                      <IoMdArrowDropup />
                    </span>
                  ) : (
                    <span>
                      <IoMdArrowDropdown />
                    </span>
                  )}
                  <span
                    className={`${
                      item?.item?.data?.price_change_percentage_24h?.usd > 0
                        ? "bg-green-200 text-green-600 p-1 rounded-lg"
                        : "bg-red-200 text-red-600 rounded-lg"
                    }`}
                  >
                    {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                      2
                    )}
                    %
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
