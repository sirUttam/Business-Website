import React from 'react'
import specialservices from '../../../assets/specialservices.jpg'
import { SlStar } from "react-icons/sl";
import { FiCloudRain } from "react-icons/fi";
import { PiSpeakerHighBold } from "react-icons/pi";


function SpecialServices() {
    const iconsArr = [
        {
            icon: <SlStar />, title: "Best Planing"
        }, {
            icon: <FiCloudRain />, title: "Cloud Service"
        }, {
            icon: <PiSpeakerHighBold />, title: "Branding"
        },
    ]
    return (
        <div className='py-24 h-fit w-full'>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2'>
                {/* first col */}
                <div className='flex flex-col justify-center w-11/12 gap-14'>
                    <div className='text-2xl font-Primary font-semibold text-center md:text-left md:tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl mr-1 text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>our speci</span>al services</div>
                    <div>
                        <div className='text-4xl text-center md:text-start md:text-5xl md:w-5/7 font-Primary md:leading-14 font-medium capitalize'>
                            the devoted special services
                        </div>
                        <div className='bg-gray-300 flex place-self-center md:place-self-start h-1 mt-6 rounded-2xl w-3/7 md:w-1/7'></div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10'>
                        {
                            iconsArr.map((val, i) => {
                                return (
                                    <div key={i}>
                                        <div className='flex items-center md:justify-start justify-center gap-2'>
                                            <div className='text-bluesoft text-4xl'>
                                                {val.icon}
                                            </div>
                                            <div className='text-2xl font-Primary font-medium'>
                                                {val.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='text-lg text-center md:text-left text-gray-500 line-clamp-5'>
                        OUR SPECIAL SERVICES The devoted special services Best Planing Cloud Service Branding Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh. Integer eget bibendum nulla, neced hendrerit magna. Nunc vitae ipsum interdum, varius magna ut, sollicitudin nunc. Pellentesque habitant morbi tristique senectus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis dolor, mit malesuada non leo a, vehicula ornare nibh.
                    </div>
                </div>

                {/* second column */}
                <div className='h-[300px] md:h-[600px] w-full md:w-[600px] rounded-2xl overflow-hidden'>
                    <img className='h-full w-full transition-all duration-300 delay-75 ease-in-out object-cover hover:scale-105' src={specialservices} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SpecialServices