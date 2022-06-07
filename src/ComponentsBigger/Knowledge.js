import React from 'react'
import '../css/Knowledge.css'
const Knowledge = () => {
  return (
    <div>
      <div className="knowledge-wrapper component-wrapper-class">
        <h1 className='knowledge-header'>EXPERIENCE</h1>
        <div className="knowledge-container">
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
          <div className="middle-knowledge">
            <h2>DEVELOPMENT</h2>
            <div className="middle-grid">
              <h3>SCRUM</h3>
              <h3>XP</h3>
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
    </div>
  )
}

export default Knowledge