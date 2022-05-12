import React from 'react'
import '../css/Mainpage.css'
import Typical from 'react-typical'

const Mainpage = () => {
  return (
    <div className='main-page-container'>
      {/* <img src='/' alt='pfp pic & information ontop of eachother'></img> */}
      <h1 style={{ textAlign: 'center' }}>WHO I AM</h1>
      <div className="typical-typing">
        <h1><Typical loop={1}
          steps={['FULLSTACK DEVELOPER', 1000]}
        /> </h1>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Mainpage