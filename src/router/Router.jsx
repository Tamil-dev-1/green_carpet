import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import ContactUs from '../pages/contactUs/ContactUs'

const Router = () => {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
        </Routes>


        {/* FOOTER SECTION */}

        <Footer />
    </div>
  )
}

export default Router
