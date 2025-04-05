import React from 'react'
import business from '../../../assets/business.jpg'
function CooperationServices() {
  return (
    <div className='py-20 h-fit'>
        <div className='relative h-[650px]'>
            <img className='relative h-full w-full object-cover' src={business} alt="image" />

            {/* absolute div container */}
            <div className='absolute w-fit right-2 top-30 rounded-2xl  bg-gradient-to-r from-bluehard to-bluesoft'>
                <div className='flex flex-col gap-8 px-12 py-16 max-w-[800px] '>
                <div className='text-2xl font-Primary font-semibold tracking-[4px] text-white uppercase'><span className='bg-gradient-to-r from-yellowhard to-yellowsoft py-2 pl-6 rounded-tl-xl rounded-bl-xl mr-1 text-black shadow-[0_0_10px_rgba(13, 82, 129,0.8)'>coo</span>peration</div>


                <div className='flex flex-col gap-4'>
                    <div className='uppercase text-5xl text-white font-bold'>START PROJECT WITH US ?</div>
                    <div className='text-lg w-5/7 text-gray-300 font-Secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec r, Mit Malesuada Non Leo A, Vehicula Ornare Nibh.</div>
                </div>
                
                <button className="mt-4 w-fit shadow-[0_0_10px_rgba(225,225,29,0.8)] relative px-12 py-3 rounded-3xl text-black uppercase cursor-pointer overflow-hidden group">
                                  {/* Background Layer 1 (default) */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-yellowhard to-yellowsoft transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>
                    
                                  {/* Background Layer 2 (hover) */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-bluehard to-bluesoft transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    
                                  {/* button text */}
                                  <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:scale-105 group-hover:text-white">
                                    contact us
                                  </span>
                                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CooperationServices