import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialIcons'>
            <FaFacebook/><FaInstagram/><FaTwitter/><FaLinkedin/>
        </div>
        <p>2023 &copy;  Created by Somossy László</p>
    </div>
  )
}

export default Footer