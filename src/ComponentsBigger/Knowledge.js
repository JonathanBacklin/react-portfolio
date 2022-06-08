import React from 'react'
import '../css/Knowledge.css'
import pfp from '../assets/Jonte.jpeg'
const Knowledge = () => {
  return (
    <section id='about-me' className="knowledge-wrapper component-wrapper-class">
      <h1 className='knowledge-header'>ABOUT ME</h1>
      <div className="knowledge-container">
        <div className="about-me-text">
          <p>Experienced Fullstack Developer with focus on Javascript. Familiar with development strategies such as SCRUM & XP</p>
        </div>
        <div className="about-knowledge">
          <div className="about-grid">
            <img src={pfp} alt="profile pic" className='pfp-pic' />
          </div>
        </div>
        <div className="code-wrapper">
          <div className="frontend-knowledge">
            <h2>FRONTEND</h2>
            <div className="frontend-grid">
              <h3>REACT</h3>
              <h3>JAVASCRIPT</h3>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>BOOTSTRAP</h3>
              <h3>TAILWIND</h3>
            </div>
          </div>
          <div className="backend-knowledge">
            <h2>BACKEND</h2>
            <div className="backend-grid">
              <h3>NODE</h3>
              <h3>REST</h3>
              <h3>MONGODB</h3>
              <h3>SQL</h3>
              <h3>C++</h3>
              <h3>PYTHON</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Knowledge