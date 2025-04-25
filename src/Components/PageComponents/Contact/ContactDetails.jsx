import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneIncoming } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

function ContactDetails() {
    const contactArr = [
        {
            icon:<MdOutlineMarkEmailUnread/>, title:"Email:", subTitle:"noSmoking.gmail.com"
        },{
            icon:<FiPhoneIncoming/>, title:"Phone:", subTitle:"+977 9865549270"
        },{
            icon:<FaLocationDot/>, title:"Address:", subTitle:"Tinkune-4, Manigram, America PO-2322"
        },
    ]
  return (
    <div className='h-fit bg-gray-100 py-20 mb-10 md:mb-30'>
<div className='w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row gap-16 md:gap-0 justify-between '>
{
    contactArr.map((val,i)=>{
        return(
            <div key={i}>
              <div className='flex text-center md:text-start flex-col gap-2 md:gap-4 items-center group'>
              <div className='text-7xl transition-all duration-500 delay-75 ease-in-out group-hover:skew-2 text-bluesoft group-hover:scale-105 group-hover:rotate-12'>
                    {val.icon}
                </div>
                <div className='text-3xl font-medium uppercase'>
                    {val.title}
                </div>
                <div className='text-lg text-gray-600'>
                    {val.subTitle}
                </div>
              </div>
            </div>
        )
    })
}
</div>

    </div>
  )
}

export default ContactDetails