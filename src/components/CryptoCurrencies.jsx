import React from "react";
import Graph from "./Graph";
import useFetchApi from "../hooks/useFetchApi";
import Dropdown from "./Dropdown";
import PerformanceComp from "./PerformanceComp";
import Sentiment from "./Sentiment";

const CryptoCurrencies = () => {
  const { data, handleCoinId, coinId } = useFetchApi();

  // console.log(data);
  return (
    <>
      <div className="">
        <Dropdown handleCoinId={handleCoinId} />
        {[data].map((item) => (
          <div key={item?.id} className="shadow-2xl rounded-lg p-2 pt-4">
            <div className="flex gap-2 items-center">
              <img src={item?.image?.thumb}></img>
              <h1 className="font-semibold text-2xl">
                {item.name}
                <span className="uppercase px-2">{item.symbol}</span>
              </h1>
              <span className="bg-gray-300 p-1 rounded-lg text-center">
                Rank#{item?.market_cap_rank}
              </span>
            </div>
            <div className="flex gap-2 font-semibold pt-4 p-2">
              <h1 className="text-xl">${item?.market_data?.high_24h?.usd}</h1>
              <span className="bg-green-200 rounded-md px-1 text-gray-900 text-center">
                {item?.market_data?.price_change_percentage_24h?.toFixed(2)}%
              </span>

              <span>(24H)</span>
            </div>
            <div className="p-2 text-sm font-bold">
              <span>₹{item?.market_data?.high_24h?.inr}</span>
            </div>
            <hr></hr>
            <div>
              <Graph coinId={coinId} />
            </div>
          </div>
        ))}
        <div className="pb-6">
          <PerformanceComp data={data} />
        </div>
        <div>
          <Sentiment
            SentimentUp={data.sentiment_votes_up_percentage}
            sentimentDown={data.sentiment_votes_down_percentage}
          />
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default CryptoCurrencies;
