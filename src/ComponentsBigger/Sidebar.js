import React from 'react'
import '../css/Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-page-wrapper'>
      <div className='sidebar-page-container'>
        <div className='sidebar-left-side'>
        </div>
        <div className="sidebar-right-side">
          <h1>WHAT I SPECIALIZE IN</h1>
          <div class="container">
            <div class="skills react"><p>REACT</p><p>90%</p></div>
          </div>


          <div class="container">
            <div class="skills js"><p>JAVASCRIPT</p><p>80%</p></div>
          </div>


          <div class="container">
            <div class="skills node"><p>NODE</p><p>75%</p></div>
          </div>


          <div class="container">
            <div class="skills mongodb"><p>MONGODB</p><p>70%</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar