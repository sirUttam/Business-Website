import React from 'react'
import { useState } from 'react'
import { CgArrowLongRight } from "react-icons/cg";


function HomeServicesCard({image,title}) {
    const [hover, setHover] = useState(false)
  return (
    <div className='h-fit '>
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>

        <div className='relative bg-white overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.4)] h-70 w-90 rounded-2xl'>
            
            {/* image */}
            <img className='h-70 w-full object-cover' src={image} alt="image" />

            {/* white bg div */}
            <div className={`absolute flex transition-all duration-500 ease-in-out ${hover?"opacity-0 h-24":""} bottom-0 flex items-center gap-4 pl-6 bg-white left-0 w-full h-20  `}>
            </div>

            {/* web design text */}
                <div className='absolute z-20 bottom-6 left-10 flex items-center gap-4'>

                    {/* small blue line */}
                <div className={`${hover?"opacity-0 -translate-y-10":""} transition-all duration-500 ease-in-out  bg-gradient-to-r from-bluehard to-bluesoft h-1 rounded-3xl w-8`}></div>
                <div className={`${hover?"-translate-x-12 text-white -translate-y-8":""} transition-all duration-500  ease-in-out  capitalize font-Primary text-3xl font-semibold`}>
                    {title}
                </div>
                <div className={`${hover?"opacity-100 translate-x-10 -translate-y-7":""} transition-all duration-500  ease-in-out text-4xl opacity-0 text-yellow-300`}>
                    <CgArrowLongRight/>
                </div>
                </div>

            {/* hover blue layer */}
            <div className={`absolute transition-opacity duration-500 ease-in-out ${hover?"opacity-80":"opacity-0"} inset-0 z-10 h-full w-full opacity-0 bg-gradient-to-b from-bluehard to-bluesoft`}>
            </div>

        </div>
        </div>
    </div>
  )
}

export default HomeServicesCard