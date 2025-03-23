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
      link:"#", icon:<FaFacebookF/>,
    },
    {
      link:"#", icon:<GrInstagram/>,
    },{
      link:"#", icon:<FiTwitter/>,
    },{
      link:"#", icon:<FaTiktok/>,
    },
  ]
  return (
    <div className='relative shadow-xl text-black bg-[#F8FAFC] h-fit py-30'>
      <div className='grid w-11/12 mx-auto grid-cols-2'>

        {/* first column */}
        <div className='flex pt-15 flex-col gap-8 h-full'>
          <div className='text-6xl tracking-wide w-11/12 leading-18 font-Primary font-semibold'>
           Lorem ipsum dolor sit amet consectetur aing elit helos init.
          </div>
          <div className='text-lg font-medium w-11/12 font-Secondary'>
            Send heartfelt gifts to your loved ones without them knowing. We deliver the surprise, capture their priceless reaction, and share it with you!
          </div>
          <div className='flex items-center gap-4'>

            <button className="relative px-6 py-3 rounded-3xl text-white cursor-pointer overflow-hidden group">
              {/* Background Layer 1 (default) */}
              <span className="absolute inset-0 bg-gradient-to-r from-black to-blacksoft transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>

              {/* Background Layer 2 (hover) */}
              <span className="absolute inset-0 bg-gradient-to-r from-yellowhard to-yellowsoft transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>

              {/* button text */}
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                Hire Us <GrUserWorker />
              </span>
            </button>

            <button className='group relative px-6 py-3 rounded-3xl text-white cursor-pointer overflow-hidden '>
              {/* first bg layer */}
              <span className='absolute inset-0 transition-opacity duration-500 ease-in-out delay-100 bg-gradient-to-r from-black to-blacksoft group-hover:opacity-0'></span>

              {/* second bg layer */}
              <span className='absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out delay-100 bg-gradient-to-l from-yellowhard to-yellowsoft group-hover:opacity-100 '></span>

              {/* text layer */}
              <span className='relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105'>How it Works <GiAutoRepair /></span>
            </button>

          </div>
        </div>

        {/* second column */}
        <div className='h-[500px] p-4 bg-gradient-to-r from-yellowhard to-yellowsoft rounded-tl-[200px] rounded-br-[200px] w-[650px]'>
          <img className='w-full h-full object-cover rounded-tl-[200px] rounded-br-[200px]' src={heroIMG} alt="" />
        </div>
      </div>

      {/* social media icons */}
      <div className='absolute w-full mx-auto bottom-20 left-0'>
        <div className='w-10/12 flex items-center gap-6 mx-auto'>
        <span className='text-xl text-gray-400 font-semibold'>Follow Us</span>
        <span className='flex text-gray-400 text-base gap-4 items-center'>
          {
            iconsArr.map((val,i)=>{
              return(
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