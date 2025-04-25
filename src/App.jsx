import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from '../src/Components/Pages/About'
import Services from '../src/Components/Pages/Services'
import Blog from '../src/Components/Pages/Blog'
import Contact from '../src/Components/Pages/Contact'
import Layout from './Components/HOC/Layout'
import ScrollToTop from './Components/Utils/ScrollToTop'
function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App