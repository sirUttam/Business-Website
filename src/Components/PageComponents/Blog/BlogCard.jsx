import React from 'react'
import { LuDot } from "react-icons/lu";

function BlogCard({image, title, sub}) {
  return (
    <div className='h-fit w-full'>
        <div className='flex w-full h-[570px] rounded-2xl overflow-hidden flex-col gap-4 transition-all duration-500 delay-75 ease-in-out hover:shadow-2xl'>

            {/* image */}
            <div className='h-[450px] w-full '>
                <img className='h-full w-full object-cover' src={image} alt="" />
            </div>

            {/* image date title */}
            <div className='flex flex-col pl-2 pt-2 pb-2 gap-2'>
                <div className='flex gap-2 items-center text-gray-400 text-base'>
                    <div>Apr 25 2025</div>
                    <div><LuDot/></div>
                    <div>{sub}</div>
                </div>
                <div className='text-2xl capitalize font-medium'>
                    {title}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard