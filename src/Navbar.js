import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='navbar-container'>
      <Link className='navbar-h1' to="/">JONATHAN BACKLIN</Link>
      <div style={{ position: 'relative', zIndex: '11' }}>
        <button onClick={handleToggle} className='navbar-button'>{isOpen ? <MdClose /> : <FiMenu />}</button>
      </div>
      <div className={`navbar-links ${isOpen ? 'showMenu' : ""}`}>
        <Link className='navbar-link' to="/">About Me</Link>
        <Link className='navbar-link' to="/">Projects</Link>
        <Link className='navbar-link' to="/">Skills</Link>
      </div>
    </div>
  )
}

export default Navbar