import React from 'react'
import '../css/Mainpage.css'
import Typical from 'react-typical'

const Mainpage = () => {
  return (
    <div className='main-page-container'>
      {/* <img src='/' alt='pfp pic & information ontop of eachother'></img> */}
      <div className="typical-typing">
        <h1><Typical loop={1}
          steps={['FULLSTACK DEVELOPER']}
        /></h1>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Mainpage