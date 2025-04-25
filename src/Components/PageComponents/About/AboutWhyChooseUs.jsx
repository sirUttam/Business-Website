import React from 'react'
import whyChooseUsIMG from '../../../assets/whyChooseUsIMG.jpg'
import { BsStar } from "react-icons/bs";
import { TbDeviceMobileCode } from "react-icons/tb";

function AboutWhyChooseUs() {

    const whyChooseArr = [
        {
            icon:<BsStar/>, 
            title:"Top Notch Design", 
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, illo sit amet consectetur adipisicing elit. Minima, illo."
        },{
            icon:<TbDeviceMobileCode/>, 
            title:"Mobile Friendly", 
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, illo sit amet consectetur adipisicing elit. Minima, illo."
        },
    ]
    return (
        <div className='h-fit w-full py-20'>
            <div className='mx-auto md:w-full flex md:flex-row gap-2 md:gap-0 flex-col'>

                {/* first grid */}
                <div className='h-[400px] md:h-[550px] w-full md:w-6/12'>
                    <img className='h-full w-full object-cover' src={whyChooseUsIMG} alt="" />
                </div>

                {/* second grid */}
                <div className='bg-gradient-to-l md:pl-20 py-12 md:py-0 flex flex-col justify-center gap-14 text-white md:w-6/12 from-black to-blacksoft'>

                    {/*  */}
                    <div className='text-2xl font-Primary text-center md:text-left text-white font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-yellowhard to-yellowsoft py-2 pl-6 rounded-tl-xl rounded-bl-xl mr-1 text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Why</span>Choose us</div>

                    {/*  */}
                    <div className='flex pl-6 flex-col gap-10'>
                        {
                            whyChooseArr.map((val,i)=>{
                                return(
                                    <div key={i}>
                        <div className='flex gap-4'>
                            <div className='text-5xl'>
                                {val.icon}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='text-3xl font-semibold font-Primary'>
                                    {val.title}
                                </div>
                                <div className='font-Secondary w-6/7 text-lg'>
                                {val.desc}
                                </div>
                            </div>
                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWhyChooseUs