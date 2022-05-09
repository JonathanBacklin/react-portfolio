import React, { useState } from 'react'
import './css/Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='header-wrapper'>
      <div className='navbar-container'>
        <a href='/'><h1 className='navbar-h1'>JONATHAN BACKLIN</h1></a>
        <div style={{ position: 'relative', zIndex: '11' }}>
          <button onClick={handleToggle} className='navbar-button'>{isOpen ? <MdClose /> : <FiMenu />}</button>
        </div>
        <div className={`navbar-links ${isOpen ? 'showMenu' : ""}`}>
          <a href='/'><h2 className='navbar-link'>About Me</h2></a>
          <a href='/'><h2 className='navbar-link'>Projects</h2></a>
          <a href='/'><h2 className='navbar-link'>Skills</h2></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar