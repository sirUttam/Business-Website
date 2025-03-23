import React from 'react'
import esewaLogo from '../../assets/esewaLogo.jpg'
import khaltiLogo from '../../assets/khaltiLogo.jpg'


function Footer() {
  return (
    <div className='bg-black text-white py-16'>
      <div className='w-10/12 grid grid-cols-3 mx-auto'>
      {/* first column */}
        <div className='flex flex-col gap-4'>
         <div className='flex flex-col gap-0.5'>
         <div className='text-2xl font-Primary font-semibold'>Company Logo</div>
          <div className='font-medium w-5/7 text-base leading-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis magni fuga numquam velit eos.
          </div>
         </div>
          <div className='flex gap-4 items-center'>
            <span className='h-8 w-15'>
              <img className='h-full w-full object-cover' src={esewaLogo} alt="" />
            </span>
            <span className='h-8 w-15'>
              <img className='h-full w-full object-cover' src={khaltiLogo} alt="" />
            </span>
            

          </div>
        </div>

        {/* second column */}
       <div className='flex flex-col gap-2 w-full'>
        <div className='font-semibold font-Primary text-3xl'>
          Links
        </div>
       <div className='flex text-lg font-medium gap-4'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>

        </div>
       </div>
        

        {/* third column */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='font-Primary text-2xl font-semibold'>
              Office Location
            </div>
            <div>
              Butwal, Rupandehi, 9865549270
            </div>
          </div>

          <div className='flex flex-col gap-2'>
              <input type="email" placeholder='Your Email' className='py-1.5 w-4/5 rounded-3xl px-6 border bg-white text-[#034C53] font-semibold border-[#034C53] outline-0' />
            <button className='bg-white text-[#034C53] w-fit px-12 py-2.5 text-sm font-semibold uppercase cursor-pointer rounded-3xl'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer