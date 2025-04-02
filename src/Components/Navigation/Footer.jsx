import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import SubFooter from './SubFooter';

function Footer() {
  return (
    <div className='bg-gradient-to-r from-black to-blacksoft pt-30 pb-12 text-white'>
      <div className='w-11/12 mx-auto'>
        <div className='flex justify-between'>

          {/* want to deal part */}
          <div className='flex flex-col gap-4'>
            <div className='text-5xl font-medium font-Primary text-yellowsoft'>
              Want to deal with us? Let's Talk
              </div>
            <div className='flex gap-16'>
              <div className='text-2xl text-gray-400 capitalize font-Primary font-medium'>
                Contact Us
                </div>
              <div className='text-3xl text-yellowsoft'>
                <FaArrowRightLong/>
              </div>
            </div>
          </div>

          {/* email box part */}
          <div className='flex flex-col items-center gap-2'>
            <div className='text-gray-500 font-Primary font-medium text-2xl'>
              Send Us Tips and Feedback.
              </div>
            <div className='w-[400px] uppercase text-black font-semibold text-xl bg-gradient-to-r from-yellowhard to-yellowsoft overflow-hidden rounded-4xl pr-8'>
              <input className='px-8 text-lg text-black w-5/7 py-4 outline-none' placeholder='Your Email...' type="email" />
              <button className='cursor-pointer'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
     
     <SubFooter/>
      </div>
    </div>
  )
}

export default Footer