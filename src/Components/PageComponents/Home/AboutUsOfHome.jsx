import React from 'react'
import containerImg from '../../../assets/containerImg.png'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { FiTwitter } from 'react-icons/fi'

function AboutUsOfHome() {
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
    <div className='h-fit py-40'>
        <div className='w-11/12 grid grid-cols-1 gap-32 md:gap-0 md:grid-cols-2 mx-auto'>
            {/* first column */}
            <div className='relative h-[250px] md:h-[580px] w-5/7 ml-2 md:ml-0 md:w-[550px]'>
                <img className='relative z-0 h-full shadow-[0_0_20px_rgba(0,0,0,0.8)] rounded-2xl w-full object-cover' src={containerImg} alt="" />

                {/* absolute blue div */}
                <div className='absolute top-5 md:top-15 -z-20 -right-10 md:-right-20 rounded-3xl bg-gradient-to-b from-bluehard to-bluesoft h-20 md:h-60 w-30 md:w-60'></div>
                
                {/* absolute gray div */}
                <div className='absolute top-20 md:top-60 -z-10 -right-20 md:-right-36 rounded-3xl bg-[#E4E4E4] h-60 md:h-100 w-60 md:w-80'></div>

                {/* absolute yellow follow div */}
                <div className='absolute flex flex-col shadow-[0_0_10px_rgba(225,225,29,0.8)]  items-center gap-2 md:gap-4 z-10 bottom-2 md:bottom-15 py-4 md:py-6 px-10 md:px-18 -right-10 md:-right-33 rounded-2xl bg-gradient-to-r from-yellowhard to-yellowsoft'>
                    <div className='capitalize font-bold text-lg md:text-2xl'>Follow Us</div>

{/* icons */}
                    <div className='flex text-sm md:text-base gap-6 items-center'>
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
                    </div>
                </div>


            </div>

            {/* second column */}
            <div className='flex flex-col md:text-left text-center gap-6 md:gap-10 md:ml-40 justify-center'>
                <div className='text-2xl font-Primary font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Abo</span>ut Us</div>
                
                <div className='text-4xl md:text-5xl font-semibold md:leading-14'>Lorem ipsum dolor hello hsiteo sit.</div>
                {/* bottom small line */}
                <div className='h-1.5 w-2/7 flex self-center md:self-auto bg-gray-300 rounded-2xl'></div>

                <div className='text-lg text-gray-500 font-Secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis provident obcaecati sequi aut totam, dolor ducimus deserunt nobis enim blanditiis nihil, tempore exercitationem. Quidem mollitia, beatae quisquam perferendis laboriosam optio nihil accusantium distinctio aliquam nostrum a asperiores deleniti ullam.</div>
                <div>
                    <button className="mt-4 shadow-[0_0_10px_rgba(0,0,0,0.8)] relative px-12 py-3 rounded-3xl text-white uppercase cursor-pointer overflow-hidden group">
                                  {/* Background Layer 1 (default) */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-bluehard to-bluesoft transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>
                    
                                  {/* Background Layer 2 (hover) */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-yellowhard to-yellowsoft transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    
                                  {/* button text */}
                                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    Read More
                                  </span>
                                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsOfHome