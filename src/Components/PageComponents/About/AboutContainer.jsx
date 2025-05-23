import React from 'react'
import whoWeAreIMG from '../../../assets/whoWeAreIMG.jpg'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

function AboutContainer() {
  return (
    <div className='py-28 h-fit shadow-lg'>
      <div className='w-11/12 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 mx-auto'>

      {/* first grid */}
        <div className='flex order-2 md:order-1 pt-16 md:w-6/7 flex-col gap-10 md:gap-12'>
        <div className='text-2xl text-center md:text-left font-Primary font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl mr-1 text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Who</span>We Are</div>
          <div className='text-xl text-center md:text-left font-Primary '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo saepe explicabo, excepturi, recusandae fugiat similique delectus ea id provident expedita dolores libero dolorem consequuntur, odio ullam? Nemo, et adipisci cupiditate velit fugit voluptates magni similique delectus, id tempore ipsam? Totam odio ullam? Nemo, et adipisci cupiditate velit fugit voluptates magni similique delectus, id tempore ipsam? Totam.
          </div>
         <div className='group w-fit flex flex-col md:flex-row  self-center md:self-start  md:ml-4'>
         <button className='uppercase cursor-pointer flex items-center text-xl font-Primary font-semibold gap-2'>read more <span className='text-2xl mt-0.5'><TbArrowBigRightLinesFilled/></span>
         </button>
         <div className='w-0 bg-bluesoft h-1 rounded-3xl transition-all duration-300 delay-75 ease-in-out group-hover:w-4/5'></div>
         </div>
        </div>

        {/* image */}
        <div className='h-[300px] md:h-[450px] order-1 md:order-2 w-full md:w-[650px] rounded-lg overflow-hidden shadow-xl'>
          <img className='h-full w-full object-cover' src={whoWeAreIMG} alt="about us image" />
        </div>
      </div>
    </div>
  )
}

export default AboutContainer