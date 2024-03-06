import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Graph = ({ coinId }) => {
  const [chartState, setChartState] = useState({
    Price: {
      options: {
        chart: {
          id: "area-datetime",
        },
        grid: {
          show: false,
        },
        title: {
          text: "Market Price (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            // color: "#32ed28",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          // colors:["#121212"],
          show: true,
          labels: {
            formatter: function (val) {
              return val.toFixed(2);
            },
          },
        },
        // colors: ["#32ed28"],
        tooltip: {
          shared: false,
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "",
        },
        selection: 365,
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: "100%",
            },
          },
        },
      ],
      series: [
        {
          name: "Market Price",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const [prevId, setPrevId] = useState(coinId);
  const [prevSelection, setPrevSelection] = useState(
    chartState.Price.options.selection
  );

  const fetchData = async () => {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${chartState.Price.options.selection}`
    );
    let jsonChartData = await response.json();
    // console.log(jsonChartData);

    setChartState((prevChartData) => ({
      ...prevChartData,
      Price: {
        options: prevChartData.Price.options,
        series: [{ name: "Market Price", data: jsonChartData.prices }],
      },
    }));
  };

  useEffect(() => {
    if (
      prevId !== coinId ||
      prevSelection !== chartState.Price.options.selection
    ) {
      fetchData();
      setPrevId(coinId);
      setPrevSelection(chartState.Price.options.selection);
    }
  }, [coinId, chartState.Price.options.selection, prevId, prevSelection]);
  return (
    <div className="pt-8">
      <div id="chart" className="">
      <div className="toolbar flex justify-end">
          <button
            id="one_month"
            onClick={() =>
              setChartState((prevChartData) => ({
                ...prevChartData,
                Price: {
                  options: {
                    ...prevChartData.Price.options,
                    selection: 1,
                  },
                  series: prevChartData.Price.series,
                },
              }))
            }
          >
            1D
          </button>
          &nbsp;
          <button
            id="six_months"
            onClick={() =>
              setChartState((prevChartData) => ({
                ...prevChartData,
                Price: {
                  options: {
                    ...prevChartData.Price.options,
                    selection: 7,
                  },
                  series: prevChartData.Price.series,
                },
              }))
            }
          >
            1W
          </button>
          &nbsp;
          <button
            id="one_year"
            onClick={() =>
              setChartState((prevChartData) => ({
                ...prevChartData,
                Price: {
                  options: {
                    ...prevChartData.Price.options,
                    selection: 30,
                  },
                  series: prevChartData.Price.series,
                },
              }))
            }
          >
            1M
          </button>
          &nbsp;
          <button
            id="ytd"
            onClick={() =>
              setChartState((prevChartData) => ({
                ...prevChartData,
                Price: {
                  options: {
                    ...prevChartData.Price.options,
                    selection: 182,
                  },
                  series: prevChartData.Price.series,
                },
              }))
            }
          >
            6M
          </button>
          &nbsp;
          <button
            id="all"
            onClick={() =>
              setChartState((prevChartData) => ({
                ...prevChartData,
                Price: {
                  options: {
                    ...prevChartData.Price.options,
                    selection: 365,
                  },
                  series: prevChartData.Price.series,
                },
              }))
            }
          >
            1Y
          </button>
        </div>
        <ReactApexChart
          options={chartState.Price.options}
          series={chartState.Price.series}
          type="area"
          // height="400"
          // width="600"
          // className="sm:w-[500px] w-[400px]"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Graph;
