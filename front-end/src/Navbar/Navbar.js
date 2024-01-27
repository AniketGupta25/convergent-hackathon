import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logoAndSlogan">
            <img src="" alt='logo' className='logo'/>
            <div className='slogan'></div>
        </div>
        <div className='desktopMenu'>
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Programs</Link>
            <Link className="desktopMenuListItem">Our Team</Link>
            <Link className="desktopMenuListItem">Why Us?</Link>
            <Link className="desktopMenuListItem">Register</Link>
        </div>
    </nav>
  )
}

export default Navbar
