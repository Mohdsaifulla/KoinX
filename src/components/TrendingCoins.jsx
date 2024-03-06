import React from 'react'
import useFetchTrending from "../hooks/useFetchTrending"
const TrendingCoins = () => {
  const TrendingCoin=useFetchTrending()
  console.log(TrendingCoin)
    
  return (
    <div>TrendingCoins</div>
  )
}

export default TrendingCoins