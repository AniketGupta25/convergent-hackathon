import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='border'>
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo'/>
            <div className='desktopMenu'>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Demo</Link>
                <Link className="desktopMenuListItem">Team</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
