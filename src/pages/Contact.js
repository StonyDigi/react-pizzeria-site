import React from 'react'
import {motion} from 'framer-motion'
import ContactImage from '../assets/contact.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <motion.div
    className='contact'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.2}}
    
    >
       <div className="contactTop" style={{backgroundImage: `url( ${ContactImage} )`}}></div>
        <div className="contactContainer">
            <h2>Kapcsolat</h2>
            
            <div className="form">
            <form action="/">
                <label>Név</label>
                <input type="text" placeholder='név'/>
                <label>Email</label>
                <input type="email" placeholder='email cím'/>
                <textarea cols="50" rows="10" placeholder='Üzenet írása...'></textarea>
                <button>Küldés</button>
                
            </form>

            <div className="contactFooter">
                <ul>
                    <p><strong>Elérhetőségek</strong></p>
                    <li>Cím: 3300 Eger, Dobó Tér 8-10.</li>
                    <li>Telefonszám: +361258951.</li>
                    <li>E-mail: pizzeria@yahoo.com</li>
                </ul>
            </div>
            </div>
        </div>
        
    </motion.div>
  )
}

export default Contact