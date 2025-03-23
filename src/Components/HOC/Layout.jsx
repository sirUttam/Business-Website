import React from 'react'
import Header from '../Navigation/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Navigation/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <div className=''>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout