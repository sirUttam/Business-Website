import React from 'react'
import TestimonialCards from '../../UI/TestimonialCards'

function HomeTestimonials() {
  return (
    <div className='bg-white py-25'>
        <div className='w-10/12 flex items-center flex-col gap-20 mx-auto'>
        <div className='text-2xl font-Primary font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl text-white shadow-[0_0_10px_rgba(0,0,0,0.8)] mr-1'>Client's</span>Review</div>
        <div>
        <TestimonialCards/>

        </div>
        </div>
    </div>
  )
}

export default HomeTestimonials