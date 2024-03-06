import React from 'react'
import CryptoCurrencies from './CryptoCurrencies'
import TrendingCoins from './TrendingCoins'


const Hero = () => {
  return (
  <div className='flex flex-col sm:flex-row'>
    <div className='px-6 pt-10 flex-1'>
        <CryptoCurrencies/> 
    </div>
    <div>
      <TrendingCoins/>
    </div>
    </div>
  )
}

export default Hero