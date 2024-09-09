import React from 'react'
import Hero from '../Component/Hero'
import LatestCollection from '../Component/LatestCollection'
import BestSeller from '../Component/BestSeller'
import OurPolicy from '../Component/OurPolicy'
import NewsLetterBox from '../Component/NewsLetterBox'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Home
