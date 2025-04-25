import React from 'react'
import { BiUpArrowAlt } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";

function SubFooter() {
  return (
    <div className='pt-10 md:pt-26'>
        <div className='flex flex-col gap-8'>

            {/* COntact email part */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-0 text-center md:text-left justify-between md:w-8/12 text-xl  font-Primary text-gray-400'>
          <div>+977-9865549270</div>
          <div>abc2233@gmail.com</div>
          <div className='capitalize'>Butwal, Rupandehi, Lumbini Province, Nepal</div>
        </div>

            {/* line  */}
            <div className='bg-gray-500 h-0.5 rounded-3xl w-full'></div>


            {/* copyright */}
          <div className='relative'>
            <div onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className='fixed transition-all ease-in-out duration-300 delay-75 cursor-pointer right-5 bottom-5 rounded-full h-10 w-10 bg-yellowhard text-white flex justify-center items-center text-3xl md:text-2xl hover:bg-white hover:text-yellowhard'>
                <BiUpArrowAlt/>
            </div>
          <div className='flex text-lg justify-center md:items-center gap-1 text-gray-400'>
               <span className='mt-1.5 md:mt-0.5'><FaRegCopyright/></span> 2025 hellowrold | All rights reserved
                </div>
          </div>
        </div>
    </div>
  )
}

export default SubFooter