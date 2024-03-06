import React from "react";

const PerformanceComp = ({ data }) => {
  console.log(data);
  return (
    <div className="pt-6 p-2">
      <div className="flex gap-4 pb-4 flex-wrap">
        <span>Overview</span>
        <span>Fundamentals</span>
        <span>NewsInsights</span>
        <span>Sentiments</span>
        <span>Team</span>
        <span>Technicals</span>
        <span>Tokenomics</span>
      </div>
      <hr />
      <div>
        <div className="pt-6 shadow-xl p-2 rounded-xl">
          <div>
            <h1>Performance</h1>
          </div>
          {data &&
            [data].map((item) => (
              <div key={item?.id} className="">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p>Today Low</p>
                    <p>{item?.market_data?.low_24h?.usd}</p>
                  </div>
                  <div className="bg-red-400 h-1 w-96">
                    <div></div>
                  </div>
                  <div>
                    <p>today high</p>
                    <p>{item?.market_data?.high_24h?.usd}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p>52 week low</p>
                    <p>{365 * item?.market_data?.low_24h?.usd}</p>
                  </div>
                  <div className="bg-red-400 h-1 w-96">
                    <div></div>
                  </div>
                  <div>
                    <p>52week high</p>
                    <p>{365 * item?.market_data?.high_24h?.usd}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h1>Fundamentals</h1>
                  </div>
                  <div className="flex  sm:flex-row flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <p>{item?.name} price</p>
                        <hr></hr>
                        <p>24h Low/24h High</p>
                        <hr></hr>
                        <p>7d Price Change</p>
                        <hr></hr>

                        <p>Trading Volume</p>
                        <hr></hr>

                        <p>Market Cap Rank</p>
                        <hr></hr>
                      </div>
                      <div>
                        <p>${item?.market_data?.current_price?.usd}</p>
                        <hr></hr>

                        <p>{`$${item?.market_data?.low_24h?.usd}/${item?.market_data?.high_24h?.usd}`}</p>
                        <hr></hr>

                        <p>
                          $
                          {
                            item?.market_data
                              ?.price_change_percentage_7d_in_currency?.usd
                          }
                        </p>
                        <hr></hr>

                        <p>${item?.market_data?.total_volume?.usd}</p>
                        <hr></hr>

                        <p>{item?.market_cap_rank}</p>
                        <hr></hr>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p>Marke Cap</p>
                        <p>Market Cap Ratio</p>

                        <p>All-Time High</p>
                        <p>All-Time Low</p>
                      </div>
                      <div>
                        <p>${item?.market_data?.market_cap?.usd}</p>
                        <p>{item?.market_data?.market_cap_fdv_ratio}</p>
                        <p>{item?.market_data?.ath?.usd}</p>
                        <p>{item?.market_data?.atl?.usd}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceComp;
