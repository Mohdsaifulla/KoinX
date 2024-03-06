import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadialSentimentChart = ({ SentimentUp }) => {
  //   console.log(SentimentUp);
  const [chartState, setChartState] = useState({
    series: [40],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "0%",
          },
        },
      },
      labels: [""],
    },
  });

  useEffect(() => {
    setChartState((prevChartState) => ({
      ...prevChartState,
      series: [SentimentUp],
    }));
  }, [SentimentUp]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartState?.options}
          series={chartState?.series}
          type="radialBar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadialSentimentChart;
