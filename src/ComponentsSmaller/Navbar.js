import React, { useState, useEffect } from 'react'
import '../css/Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 50;
      // console.log(scrollCheck)
      setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);
  return (
    <div className={` header-wrapper ${scroll ? "navbar-scrolled" : ""}`}>
      <div className='navbar-container'>
        <a href='/'><h1 className='navbar-h1'>JONATHAN BACKLIN</h1></a>
        <div style={{ position: 'relative', zIndex: '11' }}>
          <button onClick={handleToggle} className='navbar-button'>{isOpen ? <MdClose /> : <FiMenu />}</button>
        </div>
        <div className={`navbar-links ${isOpen ? 'showMenu' : ""}`}>
          <a href='#about-me'><h2 className='navbar-link'>About Me</h2></a>
          <a href='#skills'><h2 className='navbar-link'>Skills</h2></a>
          <a href='#projects'><h2 className='navbar-link'>Projects</h2></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar