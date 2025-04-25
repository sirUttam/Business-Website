import React from 'react'
import ContactHero from '../PageComponents/Contact/ContactHero'
import ContactDetails from '../PageComponents/Contact/ContactDetails'

function Contact() {
  return (
    <div className='mt-52'>
      <ContactHero/>
      <ContactDetails/>
    </div>
  )
}

export default Contact