import React, { useEffect, useState } from 'react'
import "../css/Footer.css"
let APIKEY = "10b4612fbea7aa55e920f65dafaca399"
let URL = `https://api.openweathermap.org/data/2.5/weather?q=frankfurt&units=metric&appid=${APIKEY}`
const Footer = () => {
  const [temp, setTemp] = useState()

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(URL)
      let resJson = await res.json()
      console.log(resJson)
      setTemp(resJson.main.temp)

    }
    fetchData()
  })

  let roundedTemp = Math.round(temp)
  let getDate = new Date()
  let currentHour = getDate.getHours()
  let currentMinute = getDate.getMinutes()

  const checkTime = x => {
    const conversion = (x < 10) ? '0' : '';
    return conversion + x;
  }
  return (
    <div className='footer-wrapper'>
      <div className="information">
        <h2>Stockholm {checkTime(currentHour)}:{checkTime(currentMinute)}</h2> <h2>,</h2>
        <h2>{roundedTemp}&deg;</h2>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/jonathan-b%C3%A4cklin-417a1420b/" target="_blank" rel="noreferrer"><h4>LinkedIn</h4></a>
        <a href="https://www.github.com/JonathanBacklin" target="_blank" rel="noreferrer"><h4>Github</h4></a>
      </div>
    </div>
  )
}

export default Footer