import React from 'react'
import HomeServicesCard from '../../UI/HomeServicesCard'
import card1 from '../../../assets/card1.jpg'
import card2 from '../../../assets/card2.jpg'
import card3 from '../../../assets/card3.png'
import card4 from '../../../assets/card4.jpg'
import card5 from '../../../assets/card5.jpg'
import card6 from '../../../assets/card6.jpg'


function ContainerServices() {

    const cardArr = [
        {
            image: card1, title: "Projects & Solutions"
        },{
            image: card2, title: "User Friendly"
        },{
            image: card3, title: "Event Planning"
        },{
            image: card4, title: "Personalized Services"
        },{
            image: card5, title: "Support & Maintenance"
        },{
            image: card6, title: "Delivery Services"
        },
    ]
  return (
    <div className='py-25'>
        <div className='w-11/12 mx-auto flex flex-col items-center gap-30'>

        {/* first part */}
            <div className='grid grid-cols-2 '>
                <div className='text-5xl flex flex-col gap-6 w-6/7 leading-14 capitalize font-Primary font-medium'>
                    We are the leader in for our services
                    <div className='bg-gray-300 h-1.5 w-2/7 rounded-3xl'></div>
                    </div>
                <div className='font-Secondary text-lg font-medium text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cupiditate placeat, exercitationem voluptas in quos dolores, harum saepe quia nihil doloribus earum error asperiores repudiandae esse ipsum eveniet accusamus hic ab dolor dicta! Autem in quo voluptates, rem assumenda pariatur.</div>
            </div>

            {/* cars section */}
            <div className='grid grid-cols-3 gap-6 bg-green-600 w-full'>
                {
                    cardArr.map((val,i)=>{
                        return(
                            <div key={i} className='w-full'>
                            <HomeServicesCard image={val.image} title={val.title}/>
                            </div>
                        )
                    })
                }
            </div>

            {/* button */}
            <button className="mt-4 w-fit shadow-[0_0_10px_rgba(0,0,0,0.8)] relative px-12 py-3 rounded-3xl text-white uppercase cursor-pointer overflow-hidden group">
                                  {/* Background Layer 1 (default) */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-bluehard to-bluesoft transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"></span>
                    
                                  {/* Background Layer 2 (hover) */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-yellowhard to-yellowsoft transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    
                                  {/* button text */}
                                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    Load More
                                  </span>
                                </button>
        </div>
    </div>
  )
}

export default ContainerServices