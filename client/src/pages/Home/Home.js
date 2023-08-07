import React from 'react'
import HomeSlide from '../../components/HomeSlide/HomeSlide'
import HomePage from '../../components/HomePage/HomePage' 
import SleepWear from '../../components/ShopSleepwear/SleepWear'


const Home = () => {
  return (
    <div>
      <HomeSlide/>
      <HomePage />
      <SleepWear/>
    </div>
  )
}

export default Home