import React from 'react'
import './css/Mainpage.css'
import Typical from 'react-typical'

const Mainpage = () => {
  return (
    <div className='main-page-container'>
      <div className="typical-typing">
        <h1><Typical loop={1}
          steps={['FULLSTACK DEVELOPER', 1000]}
        /> </h1>
      </div>
      {/* <div className="weird-title">
        <div className="first-title">
          <span>F</span>
          <span>R</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
        </div>
        <div className="second-title">
          <span>D</span>
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
        </div>
      </div> */}
    </div>
  )
}

export default Mainpage