import React from 'react'
import HomeServicesCard from '../../UI/HomeServicesCard'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'



function ServicesOfHome() {
    const cardArr = [
        {
            image: img2, title: "web design",
        }, {
            image: img1, title: "development",
        }, {
            image: img3, title: "cloud service",
        }, {
            image: img4, title: "marketing",
        },
    ]
    return (
        <div className='py-30 bg-[#F6F6F6] h-fit'>

            {/* div for flex for whole section and button(all services) */}
            <div className='flex flex-col gap-20 items-center'>
                <div className='grid grid-cols-5 gap-14 w-11/12 mx-auto'>

                    {/* first column */}
                    <div className='flex col-span-2 flex-col gap-10 justify-center'>
                        <div className='text-2xl font-Primary font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-bluehard to-bluesoft py-2 pl-6 rounded-tl-xl rounded-bl-xl text-white shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Our</span>services</div>

                        <div className='text-5xl font-semibold leading-14'>Lorem ipsum dolor hello hsiteo sit.</div>
                        {/* bottom small line */}
                        <div className='h-1.5 w-2/7 bg-gray-300 rounded-2xl'></div>

                        <div>
                            <div className='text-lg text-gray-500 font-Secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis provident obcaecati sequi aut totam, dolor ducimus deserunt nobis enim blanditiis nihil, tempore exercitationem. Quidem mollitia, beatae hello quisquam.</div>

                        </div>

                    </div>

                    {/* second column */}
                    <div className='col-span-3 grid gap-6 pt-14 grid-cols-2'>
                        {
                            cardArr.map((val, i) => {
                                return (
                                    <div key={i}>
                                        <HomeServicesCard image={val.image} title={val.title} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button className="mt-4 shadow-[0_0_10px_rgba(0,0,0,0.8)] relative px-12 py-3 rounded-3xl uppercase cursor-pointer overflow-hidden group">
                    {/* Background Layer 1 (default) */}
                    <span className="absolute inset-0 bg-gradient-to-r from-yellowhard to-yellowsoft transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>

                    {/* Background Layer 2 (hover) */}
                    <span className="absolute inset-0 bg-gradient-to-r from-bluehard to-bluesoft transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>

                    {/* button text */}
                    <span className="relative z-10 flex items-center gap-2 transition-all duration-300 text-black group-hover:text-white group-hover:scale-105">
                        Read More
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ServicesOfHome