import React from 'react'
import '../css/Timeline.css'
const Timeline = () => {
  return (
    <div>
      <div className="timeline">
        <ul>
          <li>
            <div className="content">
              <h3>JENSEN NORRA GYMNASIUM</h3>
              <p>Programming 1 & 2(C++)<br />
                Web development 1 & 2(HTML/CSS & JS)<br />
                Typography & Colors<br />
                Computer Science 1<br />

              </p>
            </div>
            <div className="time">
              <h4>2018-2021</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h3>JENSEN YRKESHÖGSKOLA</h3>
              <p>HTML/CSS & Js<br />
                Node/Express<br />
                Web Security 1 <br />
                JS Frameworks(React) <br />
                Agile Development <br />
                Advanced Javascript
              </p>
            </div>
            <div className="time">
              <h4>2021-2023</h4>
            </div>
          </li>

          <div style={{ clear: 'both' }}></div>
        </ul>
      </div>
    </div >
  )
}

export default Timeline