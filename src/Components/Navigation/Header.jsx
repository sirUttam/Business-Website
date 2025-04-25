import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { ImSearch } from "react-icons/im";
import logoIMG from '../../assets/logoIMG.png'
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";


const NavLinks = () => {
  const location = useLocation();
  const navArr = [
    {
      link: "/",
      navItem: "Home",
    }, {
      link: "/about",
      navItem: "About",
    }, {
      link: "/services",
      navItem: "Services",
    }, {
      link: "/blog",
      navItem: "Blog",
    }, {
      link: "/contact",
      navItem: "Contact",
    },
  ];
  return(
<>
{
      navArr.map((val, i) => {
        // const isActive = val.link === location.pathname;
        return (
          <div className='capitalize text-white font-semibold text-lg group'>
            <div key={i}>
              <Link to={val.link}>
                {val.navItem}
              </Link>
            </div>

            <div className='flex justify-center'>
              <div className={`${val.link === location.pathname ? "w-1/2" : "w-0"} transition-all duration-300 delay-75 ease-in-out bg-white h-1 w-0 group-hover:w-full`}></div>
            </div>

          </div>
        )
      })
    }
</>
  )
}

function Header() {
  const [menu, setMenu] = useState(false)
  const [ScrollFix, setScrollFix] = useState(0)
  

  useEffect(() => {
    addEventListener('scroll', function () {
      // console.log()
      setScrollFix(window.scrollY)
    })


    return () => {
      removeEventListener('scroll', function () {
        // console.log(window.scrollY)
        setScrollFix(window.scrollY)
      })
    }
  }, [])


  return (
    <>

    {/* for mobile responsive menu calling state variable here */}
    {
      menu && (
        <div className={`fixed top-0 left-0 z-20 transition-all duration-500 delay-75 ease-in-out 
 bg-black text-white w-full ${menu? "h-screen opacity-100": "h-0 opacity-0"} `}>
        <div className='text-3xl flex flex-col gap-6 items-center py-10'>
        <div onClick={()=>setMenu(false)} className='border-4 p-2 rounded-full text-3xl text-white'>
        <FaXmark/>
        </div>
        
        {/* nav items */}
        <div onClick={()=>setMenu(false)} className={`flex flex-col gap-6 items-center ${menu? "opacity-100" : "opacity-0"} `}>
          <NavLinks/>
        </div>
        </div>
        </div>
      )
    }


    <div className={` ${ScrollFix >= 70 ? "top-0 " : "top-5"} transition-all duration-500 ease-in-out   fixed z-10 left-0 w-full`}>

{/* shadow div */}
<div className={`${ScrollFix ? "" : ""} w-11/12 rounded-2xl mx-auto shadow-2xl  `}>

  {/* nav bar */}
  <nav className='relative z-0 py-3 rounded-2xl px-4 md:px-10 bg-gradient-to-b from-bluehard to-bluesoft text-black flex items-center justify-between'>
    <div className='h-12 w-14'>
      <img className='h-full w-full object-cover' src={logoIMG} alt="" />
    </div>
    <div className='hidden md:flex gap-12 uppercase '>

      <NavLinks/>

    </div>
    <div className='flex items-center gap-6'>
      <span className='bg-radial from-bluesoft to to-bluehard  text-white p-3 text-sm md:text-xl rounded-full'>
        <ImSearch />
      </span>
{/*menu icon for mobile responsive */}

<div onClick={()=>setMenu(true)} className='flex  md:hidden text-4xl text-white'>
<HiMenu/>
</div>
      <button className='hidden md:flex transition-all duration-500 text-bluehard ease-in-out delay-100  text-Primary font-medium px-8 py-1.5 cursor-pointer bg-gradient-to-r from-yellowhard to to-yellowsoft rounded-3xl hover:scale-110'>9865549270</button>

    </div>
  </nav>
</div>
</div>
    </>
    
  )
}

export default Header