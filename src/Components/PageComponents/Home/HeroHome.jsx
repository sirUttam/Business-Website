import React from 'react'
import heroIMG from '../../../assets/heroIMG.png'
import { GrUserWorker } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";

function HeroHome() {
  const iconsArr = [
    {
      link: "#", icon: <FaFacebookF />,
    },
    {
      link: "#", icon: <GrInstagram />,
    }, {
      link: "#", icon: <FiTwitter />,
    }, {
      link: "#", icon: <FaTiktok />,
    },
  ]
  return (
    <div className='relative shadow-xl text-black bg-[#F8FAFC] h-fit py-35'>

      {/* small square design */}
      <div className='hidden md:flex absolute top-45 -left-45 rotate-45 z-5 opacity-90 bg-gradient-to-b from-bluehard to-bluesoft h-90 w-90'></div>

      {/* big square design */}
      <div className='hidden md:flex absolute top-35 -left-55 rotate-45 z-0 opacity-80 bg-gradient-to-b from-bluehard to-bluesoft h-110 w-110'></div>
      
      <div className='grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2'>

        {/* first column */}
        <div className='flex order-2 md:order-1 pt-12 z-10 flex-col gap-8 h-full'>
          <div className='text-3xl md:text-6xl tracking-wide w-11/12 text-center md:text-left md:leading-18 font-Primary font-semibold'>
            Lorem ipsum dolor sit amet consectetur aing elit helos init.
          </div>
          <div className='text-lg text-center md:text-left font-medium w-11/12 font-Secondary'>
            Send heartfelt gifts to your loved ones without them knowing. We deliver the surprise, capture their priceless reaction, and share it with you!
          </div>
          <div className='flex items-center gap-4'>

            {/* First Buttom */}

            <button className="relative px-6 py-3 rounded-3xl text-black cursor-pointer overflow-hidden group">
              {/* Background Layer 1 (default) */}
              <span className="absolute inset-0 bg-gradient-to-r from-yellowhard to-yellowsoft transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>

              {/* Background Layer 2 (hover) */}
              <span className="absolute inset-0 bg-gradient-to-r from-bluehard to-bluesoft transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>

              {/* button text */}
              <span className="relative z-10 flex items-center gap-2 font-Primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white">
                Hire Us <GrUserWorker />
              </span>
            </button>

            {/* second button */}
            <button className='group relative px-6 py-3 rounded-3xl text-white cursor-pointer overflow-hidden '>
              {/* first bg layer */}
              <span className='absolute inset-0 transition-opacity duration-500 ease-in-out delay-100 bg-gradient-to-r from-bluehard to-bluesoft group-hover:opacity-0'></span>

              {/* second bg layer */}
              <span className='absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out delay-100 bg-gradient-to-l from-yellowhard to-yellowsoft group-hover:opacity-100 '></span>

              {/* text layer */}
              <span className='relative z-10 flex items-center gap-2 font-Primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-black'>How it Works <GiAutoRepair /></span>
            </button>

          </div>
        </div>

        {/* second column */}
        <div className='h-[300px] md:h-[500px] order-1 md:order-2 p-4 bg-gradient-to-r from-yellowhard to-yellowsoft rounded-tl-[100px] md:rounded-tl-[200px] rounded-br-[100px] md:rounded-br-[200px] w-full md:w-[650px]'>
          <img className='w-full h-full object-cover rounded-tl-[100px] md:rounded-tl-[200px] rounded-br-[100px] md:rounded-br-[200px]' src={heroIMG} alt="" />
        </div>
      </div>

      {/* social media icons */}
      <div className='absolute w-full mx-auto bottom-10 left-0'>
        <div className='w-10/12 flex items-center gap-6 mx-auto'>
          <span className='text-xl text-gray-400 font-semibold'>Follow Us</span>
          <span className='flex text-gray-400 text-base gap-4 items-center'>
            {
              iconsArr.map((val, i) => {
                return (
                  <div key={i}>
                    <a href={val.link}>
                      {val.icon}
                    </a>
                  </div>
                )
              })
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroHome