import React from 'react'
import AboutHero from '../PageComponents/About/AboutHero'
import AboutContainer from '../PageComponents/About/AboutContainer'
import AboutWhyChooseUs from '../PageComponents/About/AboutWhyChooseUs'
import AboutOurProcess from '../PageComponents/About/AboutOurProcess'

function About() {
  return (
    <div>
      <AboutHero/>
      <AboutContainer/>
      <AboutWhyChooseUs/>
      <AboutOurProcess/>
    </div>
  )
}

export default About