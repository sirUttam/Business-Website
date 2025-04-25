import React from 'react'
import TeamCard from '../../UI/TeamCard'
import teamIMG from '../../../assets/teamIMG.jpg'
import { TbArrowNarrowRightDashed } from "react-icons/tb";


function HomeTeam() {
    const teammembersArr = [
        {
            image: teamIMG, title: "Albert Einstein", subtitle: "Full Stack developer, Founder"
        }, {
            image: teamIMG, title: "Issac Newton", subtitle: "Frontend developer, Co-Founder"
        }, {
            image: teamIMG, title: "Albert Einstein", subtitle: "Cyber Security Expert, Chairman"
        },
    ]
    return (
        <div className='bg-gradient-to-b h-fit  from-blacksoft to-black py-35 text-white'>
            <div className='items-center gap-20 flex flex-col'>
               <div className='flex items-center flex-col justify-center gap-6'>
               <div className='text-2xl font-Primary font-semibold tracking-[4px] uppercase'><span className='bg-gradient-to-r from-yellowhard to-yellowsoft py-2 pl-6 rounded-tl-xl rounded-bl-xl text-black shadow-[0_0_10px_rgba(0,0,0,0.8)]'>Team</span>Members</div>

<div className='text-xl md:text-2xl w-11/12 md:w-8/12 md:font-medium font-Secondary text-center'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore al Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam nihil rem iste providen.</div>
               </div>

                {/* Team Members */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                    {
                        teammembersArr.map((val, i) => {
                            return (
                                <div key={i}>
                                    <TeamCard image={val.image} title={val.title} subtitle={val.subtitle} />
                                </div>
                            )
                        })
                    }
                </div>
                {/* button */}
                <div>
                    <button className='flex uppercase cursor-pointer text-xl items-center gap-2 hover:underline'>
                        View All Team <span className='text-2xl mt-1'><TbArrowNarrowRightDashed/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeTeam