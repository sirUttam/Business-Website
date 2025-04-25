import React from 'react'
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";


function OurProcess() {

  return (
    <div className='py-20 h-fit'>
      <div className='w-11/12 flex flex-col gap-12 md:gap-6 mx-auto'>

        {/* how we work */}
        <div className='text-2xl font-Primary text-center md:text-left text-black font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl mr-1 text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Our</span>Process</div>

        {/* main contents */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center'>
          <div className='flex flex-col gap-6 md:gap-12'>
            {/* title */}
            <div className='text-4xl text-center md:text-left md:text-5xl font-Primary font-semibold md:leading-14 md:w-5/7 '>The Way We Do Things</div>

            {/* line div */}
            <div className='bg-gray-300 rounded-2xl flex self-center md:self-start w-3/7 md:w-1/7 h-2'></div>

            {/* description */}
            <div className='text-xl text-center md:text-start text-gray-500 font-Secondary font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias maxime deleniti reprehenderit adipisci magnam voluptate accusamus illum enim hic adipisicing elit. Excepturi alias maxime deleniti reprehenderit adipisci magnam voluptate accusamus illum enim hic.</div>
          </div>

          {/* lines icons part */}
          <div className='flex flex-col gap-2 text-xl md:text-2xl capitalize items-center'>

            {/* 1 */}
            <div className='relative transition-all duration-300 delay-75 ease-in-out group cursor-pointer w-full md:w-5/7 text-white py-4 rounded-xl hover:scale-105' >
              <div className='relative flex transition-all duration-300 delay-75 ease-in-out gap-1 items-center justify-center z-10 group-hover:text-black'>
              <span>1. Consultation & Idea Sharing</span>
              <span className='mt-1'><IoIosArrowDropdownCircle /></span>
              </div>
            <div className='absolute inset-0 opacity-0 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-yellowhard to-yellowsoft group-hover:opacity-100'></div>

            <div className='absolute z-0 inset-0 opacity-100 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-bluehard to-bluesoft group-hover:opacity-0'></div>
            </div>
            
            <div className='text-bluehard'>
              <PiArrowFatLineDownFill />
            </div>

            {/* 2 */}
            <div className='relative transition-all duration-300 delay-75 ease-in-out group cursor-pointer w-full md:w-5/7 text-white py-4 rounded-xl hover:scale-105' >
              <div className='relative flex transition-all duration-300 delay-75 ease-in-out gap-1 items-center justify-center z-10 group-hover:text-black'>
              <span>
                2. Custom Plan & Proposal
              </span>
              <span className='mt-1'><IoIosArrowDropdownCircle /></span>
              </div>
            <div className='absolute inset-0 opacity-0 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-yellowhard to-yellowsoft group-hover:opacity-100'></div>

            <div className='absolute z-0 inset-0 opacity-100 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-bluehard to-bluesoft group-hover:opacity-0'></div>
            </div>
            <div className='text-bluehard'>
              <PiArrowFatLineDownFill />
            </div>

            {/* 3 */}
            <div className='relative transition-all duration-300 delay-75 ease-in-out group cursor-pointer w-full md:w-5/7 text-white py-4 rounded-xl hover:scale-105' >
              <div className='relative flex transition-all duration-300 delay-75 ease-in-out gap-1 items-center justify-center z-10 group-hover:text-black'>
              <span>
                3. Execution & Crafting

              </span>
              <span className='mt-1'><IoIosArrowDropdownCircle /></span>
              </div>
            <div className='absolute inset-0 opacity-0 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-yellowhard to-yellowsoft group-hover:opacity-100'></div>

            <div className='absolute z-0 inset-0 opacity-100 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-bluehard to-bluesoft group-hover:opacity-0'></div>
            </div>
            <div className='text-bluehard'>
              <PiArrowFatLineDownFill />
            </div>

            {/* 4 */}
            <div className='relative transition-all duration-300 delay-75 ease-in-out group cursor-pointer w-full md:w-5/7 text-white py-4 rounded-xl hover:scale-105' >
              <div className='relative flex transition-all duration-300 delay-75 ease-in-out gap-1 items-center justify-center z-10 group-hover:text-black'>
              <span>
                4. Delivery & Follow-Up
              </span>
              <span className='mt-1'><IoIosArrowDropdownCircle /></span>
              </div>
            <div className='absolute inset-0 opacity-0 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-yellowhard to-yellowsoft group-hover:opacity-100'></div>

            <div className='absolute z-0 inset-0 opacity-100 rounded-xl transition-all duration-300 delay-75 ease-in-out bg-gradient-to-r from-bluehard to-bluesoft group-hover:opacity-0'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProcess