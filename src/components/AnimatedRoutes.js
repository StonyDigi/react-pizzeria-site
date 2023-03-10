import React from 'react'

import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Pizza from '../pages/Pizza'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AnimatedRoutes = () => {
  
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pizza" element={<Pizza />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </AnimatePresence>
    
    )

}

export default AnimatedRoutes