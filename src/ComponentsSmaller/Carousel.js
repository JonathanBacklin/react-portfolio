import React from 'react'
import '../css/Carousel.css'
import { FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiTailwindcss, SiExpress, SiMongodb, SiSqlite } from 'react-icons/si'
import { DiCss3, DiNodejsSmall, DiJavascript1, DiSass, DiGithubBadge, DiScrum } from 'react-icons/di'

const Carousel = () => {
  return (
    <div className='carousel-wrapper'>
      <h1 style={{ textAlign: 'center' }}>WHAT I KNOW</h1>
      <div className='slider'>
        {/* Skills section is twice, once with the carousel and then my highlighted knowledge in react/js */}
        {/* HTML/CSS & JS,REACT,REST,BOOTSTRAP,TAILWIND,SCSS,NODE,EXPRESS,MONGODB,GITHUB,SCRUM,POSTMAN, */}
        {/* smaller icons on phone */}
        <div className="slide-track">
          <div className="slide"><ImHtmlFive className='icon' />HTML</div>
          <div className="slide"><DiCss3 className='icon' />CSS</div>
          <div className="slide"><DiJavascript1 className='icon' />JAVASCRIPT</div>
          <div className="slide"><FaReact className='icon' />REACT</div>
          <div className="slide"><DiGithubBadge className='icon' />GITHUB</div>
          <div className="slide"><DiNodejsSmall className='icon' />NODE</div>
          <div className="slide"><SiExpress className='icon' />EXPRESS</div>
          <div className="slide"><SiMongodb className='icon' />MONGO-DB</div>
          <div className="slide"><DiScrum className='icon' />SCRUM</div>
          <div className="slide"><SiSqlite className='icon' />SQLITE</div>
          <div className="slide"><DiSass className='icon' />SASS</div>
          <div className="slide"><BsFillBootstrapFill className='icon' />BOOTSTRAP</div>
          <div className="slide"><SiTailwindcss className='icon' />TAILWIND</div>
        </div>
      </div>
    </div>
  )
}

export default Carousel