import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { ImSearch } from "react-icons/im";
import logoIMG from '../../assets/logoIMG.png'


function Header() {
  const location = useLocation();
  const [ScrollFix, setScrollFix] = useState(0)
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
    <div className={` ${ScrollFix >= 70 ? "top-0 " : "top-5"} transition-all duration-500 ease-in-out   fixed z-50 left-0 w-full`}>

      {/* shadow div */}
      <div className={`${ScrollFix ? "" : ""} w-11/12 rounded-2xl mx-auto shadow-2xl  `}>

        {/* nav bar */}
        <nav className=' py-3 rounded-2xl px-10 bg-gradient-to-b from-bluehard to-bluesoft text-black flex items-center justify-between'>
          <div className='h-12 w-14'>
            <img className='h-full w-full object-cover' src={logoIMG} alt="" />
          </div>
          <div className='flex gap-12 uppercase '>
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
          </div>
          <div className='flex items-center gap-6'>
            <span className='bg-radial from-bluesoft to to-bluehard  text-white p-3 text-xl rounded-full'>
              <ImSearch />
            </span>
            <button className='transition-all duration-500 text-bluehard ease-in-out delay-100  text-Primary font-medium px-8 py-1.5 cursor-pointer bg-gradient-to-r from-yellowhard to to-yellowsoft rounded-3xl hover:scale-110'>9865549270</button>

          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header