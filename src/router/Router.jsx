import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Footer from '../components/footer/Footer'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>


        {/* FOOTER SECTION */}

        <Footer />
    </div>
  )
}

export default Router
