import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h1>JONATHAN BACKLIN</h1>
        <div className="navbar-links">
            <Link className='navbar-link' to="/">About</Link>
            <Link className='navbar-link' to="/">Skills</Link>
            <Link className='navbar-link' to="/">Skills</Link>
        </div>
        
    </div>
  )
}

export default Navbar