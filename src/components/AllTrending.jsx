import React from "react";
import useFetchTrending from "../hooks/useFetchTrending";

const AllTrending = () => {
  const TrendingCoin = useFetchTrending();
  console.log(TrendingCoin);

  return (
    <div className="pt-8 shadow-xl rounded-lg flex flex-wrap p-2 items-center justify-center">
      {TrendingCoin?.coins?.map((item) => (
        <div key={item.item.id} className="border p-2 rounded-sm gap-4 m-2">
          <div className="flex  gap-2  items-center">
            <span>
              <img
                src={item?.item?.thumb}
                alt={item?.item?.name}
                className="rounded-full w-10"
              />
            </span>

            <span className="text-sm font-semibold">{item?.item?.symbol}</span>
            {/* <span>{item?.item?.price_change_percentage_24h?.usd}</span> */}
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
  );
};

export default AllTrending;
