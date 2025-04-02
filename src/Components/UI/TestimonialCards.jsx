import React from 'react'
import reviewIMG from '../../assets/reviewIMG.jpg'
import { MdOutlineStarOutline } from "react-icons/md";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function TestimonialCards() {
  return (
        <div className='flex rounded-2xl w-10/12 bg-transparent py-12 px-18 shadow-2xl flex-col mx-auto gap-12'>

            {/* upper clients part */}
            <div className='flex items-center gap-12'>
               <div className='relative'>
                    <div className='absolute h-40 w-40 rounded-3xl inset-4  bg-gradient-to-r from-bluehard to-bluesoft'></div>
               <div className=' h-40 w-40 overflow-hidden rounded-3xl'>
                    <img className='relative z-10 h-full w-full object-cover' src={reviewIMG} alt="image" />
                </div>
               </div>
                {/* name stars part */}
                <div className='flex flex-col justify-center'>
                    <div className='font-Primary font-semibold text-4xl'>
                        Marie Curie
                    </div>
                    <div className='font-Secondary text-lg font-medium'>
                        Web Developer
                    </div>
                    <div className='flex text-lg'>
                        {
                            [...Array(5)].map((val,i)=>{
                                return(
                                    <div key={i}>
                                        <span><MdOutlineStarOutline/></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='shadow-xl w-10/12 mx-auto p-10 rounded-2xl'>
                <div className='text-2xl italic font-Primary font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae atque iste vitae sit, laborum suscipit laboriosam repellat illum. Omnis.
                </div>

                <div className='flex justify-end w-10/12 text-4xl mx-auto'>
                    <BiSolidQuoteAltRight/>
                </div>
            </div>
        </div>
  )
}

export default TestimonialCards