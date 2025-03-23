import React from 'react'
import HeroHome from '../PageComponents/Home/HeroHome'
import AboutUsOfHome from '../PageComponents/Home/AboutUsOfHome'
import ServicesOfHome from '../PageComponents/Home/ServicesOfHome'

function Home() {
  return (
    <div className=''>
     <HeroHome/>
     <AboutUsOfHome/>
     <ServicesOfHome/>
    </div>
  )
}

export default Home