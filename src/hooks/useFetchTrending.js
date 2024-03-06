import { useEffect, useState } from "react";
const useFetchApi = () => {
  const [TrendingData, setTrendingData] = useState([]);

//   console.log(TrendingData);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const fetchdata = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const jsonData = await fetchdata.json();
    setTrendingData(jsonData);
  };

  return TrendingData;
};

export default useFetchApi;
