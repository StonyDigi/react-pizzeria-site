import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import {GiPizzaSlice} from 'react-icons/gi'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        
        <a className="navbar-left">
            <img src={Logo} alt="Logo" />
        </a>

        <div className="navbar-right">
            <Link to="/">Kezdőoldal</Link>
            <Link to="/pizza">Pizzák</Link>
            <Link to="/about">Rólunk</Link>
            <Link to="/contact">Kapcsolat</Link>
            <button>
                <GiPizzaSlice/>
            </button>
            
        </div>

    </div>
  )
}

export default Navbar