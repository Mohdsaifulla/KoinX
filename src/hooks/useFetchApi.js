import { useEffect, useState } from "react";
const useFetchApi = () => {
  const [data, setData] = useState([]);
  const [coinId, setCoinId] = useState("bitcoin");

// console.log(data)
  useEffect(() => {
    fetchApi();
  }, [coinId]);


  const fetchApi = async () => {
    const fetchdata = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    const jsonData = await fetchdata.json();
    setData(jsonData);
  };

const handleCoinId=async(event)=>{
  await setCoinId(event.target.value)
}

  return {data,handleCoinId,coinId}
};

export default useFetchApi;
