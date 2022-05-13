import React from 'react'
import "../css/Goals.css"
import { AiOutlineLineChart } from 'react-icons/ai'

const Goals = () => {
  return (
    <>
      <div className='goals-wrapper'>
        <h1 style={{ textAlign: 'center' }}>GOALS</h1>
        <div className="goals-container">
          <div className="box"><h2>INSERT GOAL</h2><AiOutlineLineChart className='icon' /></div>
          <div className="box"><h2>INSERT GOAL</h2><AiOutlineLineChart className='icon' /></div>
          <div className="box"><h2>INSERT GOAL</h2><AiOutlineLineChart className='icon' /></div>
        </div>
        <div className='steps-wrapper'>
          <h1>WHAT I AM DOING IN ORDER TO REACH THESE GOALS</h1>
          <ol>
            <li>THING THAT IM DOING</li>
            <li>THING THAT IM DOING</li>
            <li>THING THAT IM DOING</li>
            <li>THING THAT IM DOING</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Goals