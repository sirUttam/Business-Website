import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from 'react';


function TeamCard({ image, title, subtitle }) {
    const [team, setteam] = useState(false);
    const iconsArr = [
        {
            link: "#whatsapp", icons: <IoLogoWhatsapp />,
        }, {
            link: "#facebook", icons: <FaFacebookF />,
        }, {
            link: "#linkedIn", icons: <FaLinkedinIn />,
        }, {
            link: "#Twitter", icons: <FaTwitter />,
        },
    ]
    return (
        <div onMouseEnter={() => setteam(true)} onMouseLeave={() => setteam(false)}>
            <div className='relative'>

                {/* glow outline */}
                <div className='absolute w-full inset-0 bg-yellowsoft opacity-100 rounded-2xl blur'></div>

                {/* card */}
                <div className={`relative ${team ? "scale-98" : ""} bg-white h-fit transition-all duration-500 delay-75 ease-in-out rounded-2xl w-full px-6 py-6`}>
                    <div className='flex flex-col items-center gap-4 text-black'>
                        <div className={`h-50 w-50 rounded-full overflow-hidden`}>
                            <img className='h-full w-full object-top object-cover' src={image} alt="photo" /></div>


                        <div className={`-all duration-300 delay-75 ease-in-out flex gap-0.5 items-center text-center flex-col`}>
                            <div className='font-semibold text-xl capitalize font-Primary'>{title}</div>
                            <div className='font-Secondary w-5/7 leading-4 capitalize text-base font-medium'>{subtitle}</div>

                            {/* icons */}
                            <div className='flex justify-center bg-gradient-to-r from-bluehard to-bluesoft rounded-2xl text-white w-fit px-8 py-3 items-center gap-4 mt-2 text-lg'>
                                {
                                    iconsArr.map((val, i) => {
                                        return (
                                            <div key={i}>
                                                <a href={val.link}>
                                                    {val.icons}
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard