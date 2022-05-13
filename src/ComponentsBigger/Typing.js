import React from 'react'
import '../css/Typing.css'
import Typical from 'react-typical'

const Typing = () => {
  return (
    <div className='main-page-container'>
      {/* <img src='/' alt='pfp pic & information ontop of eachother'></img> */}
      <div className="typical-typing">
        <h1 style={{ fontSize: '50px', color: 'black' }}><Typical loop={1}
          steps={['FULLSTACK DEVELOPER']}
        /></h1>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Typing