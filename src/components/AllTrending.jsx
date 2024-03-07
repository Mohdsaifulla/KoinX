import React from "react";
import useFetchTrending from "../hooks/useFetchTrending";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const AllTrending = () => {
  const TrendingCoin = useFetchTrending();
  console.log(TrendingCoin);


  return (
    <div className="shadow-2xl rounded-lg flex  p-2 items-center justify-center flex-col  mt-8 scroll-trending">
      <div className="flex justify-center items-center md:flex-wrap">
        {TrendingCoin?.coins?.map((item) => (
          <div
            key={item.item.id}
            className="border m-1 p-1 rounded-sm flex flex-col gap-2"
          >
            <div className="flex  gap-2  items-center">
              <span>
                <img
                  src={item?.item?.thumb}
                  alt={item?.item?.name}
                  className="rounded-full w-10"
                />
              </span>

              <span className="text-sm font-semibold">
                {item?.item?.symbol}
              </span>

              <div className="flex justify-center items-center text-xs">
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
                      ? "bg-green-200 w-12 h-6 text-green-600 p-1 rounded-lg"
                      : "bg-red-200 text-red-600 w-12 h-6 text-center rounded-lg items-center flex"
                  }`}
                >
                  {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold">
                {item?.item?.data?.price.match(/>([^<]+)</)
                  ? "N/A"
                  : item?.item?.data?.price}
              </span>
              <span>
                <img src={item.item.data.sparkline} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrending;
