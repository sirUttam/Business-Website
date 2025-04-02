import React from 'react'
import HeroHome from '../PageComponents/Home/HeroHome'
import AboutUsOfHome from '../PageComponents/Home/AboutUsOfHome'
import ServicesOfHome from '../PageComponents/Home/ServicesOfHome'
import HomeTeam from '../PageComponents/Home/HomeTeam'
import HomeTestimonials from '../PageComponents/Home/HomeTestimonials'

function Home() {
  return (
    <div className=''>
     <HeroHome/>
     <AboutUsOfHome/>
     <ServicesOfHome/>
     <HomeTeam/>
     <HomeTestimonials/>
    </div>
  )
}

export default Home