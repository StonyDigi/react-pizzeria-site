import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import HeroImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

{/* Elem animálása: initial - kezdőállapot
                    animate - mi történjen a végén, végállapot (láthatatlanból, láthatóvá)
                    exit - amikor átlépünk egy másik oldalra akkor is halványodjon az elem
                    transition - duration: mennyi ideig tartson az effect   */}
const Home = () => {
  return (
    
    <motion.div
      className='home'
      style={{backgroundImage: `url(${HeroImage})`}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
    >
      
      <div className="homeContainer">
        <h1>Aurora Pizzéria 🍕</h1>
        <p>A fejlesztők kedvenc pizzáit nálunk találod!</p>
        <Link to='/pizza'>
          <button>Rendelés</button>
        </Link>
      </div>

    </motion.div>
  )
}

export default Home