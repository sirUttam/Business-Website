import React from 'react'
import contactIMG from '../../../assets/contactIMG.jpg'

function ContactHero() {
  return (
    <div className='h-fit w-full'>
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>

            {/* form section */}
            {/* ////////////////////////////////////////////////// */}
            <div className='flex order-2 md:order-1 flex-col gap-12'>
                {/* title part */}
            <div className='text-2xl font-Primary font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Cont</span>act Us</div>

            {/* form part */}
                <div className='flex flex-col gap-8'>
                    <div className='text-4xl text-gray-700 font-medium capitalize'>please get in touch</div>
                    <div className='text-lg'>Our mission is to provide quality English language instruction through a variety.

</div>
                    <input type="text" placeholder='Your Name' className='w-full p-2 rounded-sm outline-none capitalize text-lg text-gray-400 border-2 border-gray-300' />

                    <input type="email" placeholder='Your Email' className='w-full p-2 rounded-sm outline-none capitalize text-lg text-gray-400 border-2 border-gray-300' />
                    
                    <textarea  type="text" placeholder='Your Name' className='w-full resize-none h-50 p-2 rounded-sm outline-none capitalize text-lg text-gray-600 border-2 border-gray-400' />

                    {/* button */}
                    <button className='uppercase mt-6 transition-all duration-300 ease-in-out cursor-pointer tracking-[6px] rounded-sm bg-gradient-to-r from-black to-blacksoft w-fit text-white text-sm py-3 px-12 font-semibold hover:scale-105 hover:shadow-2xs'>send now</button>
                </div>
            </div>

            {/* image */}
            <div className='w-full order-1 md:order-2 rounded-lg overflow-hidden h-auto'>
                <img className='h-full w-full object-cover' src={contactIMG} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default ContactHero