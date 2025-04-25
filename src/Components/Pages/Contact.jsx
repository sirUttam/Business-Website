import React from 'react'
import ContactHero from '../PageComponents/Contact/ContactHero'
import ContactDetails from '../PageComponents/Contact/ContactDetails'

function Contact() {
  return (
    <div className='mt-40 flex flex-col gap-20 md:gap-32 md:mt-52'>
      <ContactHero/>
      <ContactDetails/>
    </div>
  )
}

export default Contact