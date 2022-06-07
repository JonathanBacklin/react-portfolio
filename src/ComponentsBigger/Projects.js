import React from 'react'
import '../css/Projects.css'
const Projects = () => {
  return (
    <div className='projects-wrapper component-wrapper-class'>
      <h1 className='projects-header'>PROJECTS</h1>
      <div className="projects-container">
        <div className="published-projects">
          <h1>PUBLISHED</h1>

          <a href="https://jonathanbacklin.github.io/TMDB/" target="_blank"><h2>The Movie Database</h2></a>
          <a href="https://jonathanbacklin.github.io/TMDB/" target="_blank"><h2>Crypto Project</h2></a>
        </div>
        <div className="unpublished-projects">
          <h1>unpublished</h1>
          <a href="https://jonathanbacklin.github.io/TMDB/" target="_blank"><h2>School Platform</h2></a>
        </div>
      </div>
    </div>
  )
}

export default Projects