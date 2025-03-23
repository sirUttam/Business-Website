import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { ImSearch } from "react-icons/im";


function Header() {
  const location = useLocation();
  const navArr =[
    {
      link:"/",
      navItem:"Home",
    },  {
      link:"/about",
      navItem:"About",
    },  {
      link:"/services",
      navItem:"Services",
    },  {
      link:"/blog",
      navItem:"Blog",
    },  {
      link:"/contact",
      navItem:"Contact",
    },
  ]
  return (
    <div className=' top-5 z-10 left-0 w-full'>

      {/* shadow div */}
      <div className='w-11/12 rounded-2xl mx-auto bg-black  shadow-[0_0_10px_rgba(0,0,0,0.8)]'>

      {/* nav bar */}
      <nav className=' py-5 rounded-2xl px-10 bg-gradient-to-r from-black to-blacksoft text-black flex items-center justify-between'>
        <div className='text-3xl text-white font-bold'>
          Company Logo
        </div>
        <div className='flex gap-12 uppercase '>
          {
            navArr.map((val,i)=>{
              // const isActive = val.link === location.pathname;
              return(
                  <div className='capitalize text-white font-semibold text-lg group'>
                 <div key={i}>
                <Link to={val.link}>
                {val.navItem}
                </Link>
                  </div>

                <div className='flex justify-center'>
                <div className={`${val.link === location.pathname? "w-1/2" : "w-0"} transition-all duration-300 delay-75 ease-in-out bg-white h-1 w-0 group-hover:w-full`}></div>
                </div>

               </div>
              )
            })
          }
        </div>
        <div className='flex items-center gap-6'>
          <span className='bg-gradient-to-b from-bluehard to to-bluesoft text-white p-3 text-2xl rounded-full'>
            <ImSearch/>
          </span>
          <button className='transition-all duration-500 text-white ease-in-out delay-100 bg-secondary text-Primary font-medium px-8 py-2 cursor-pointer bg-gradient-to-r from-bluehard to to-bluesoft rounded-3xl shadow-md shadow-white hover:scale-110'>9865549270</button>

        </div>
      </nav>
    </div>
            </div>
  )
}

export default Header