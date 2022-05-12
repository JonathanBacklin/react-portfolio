import React, { useEffect, useState } from 'react'
import Timeline from '../ComponentsSmaller/Timeline';
import '../css/Sidebar.css'
import CountUp from 'react-countup';



const Sidebar = () => {
  const [scroll, setScroll] = useState(1);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <div className='sidebar-page-wrapper'>
      <div className='sidebar-page-container'>
        <div className='sidebar-left-side'>
          <h1>PROGRAMMING EDUCATION</h1>
          <Timeline />
        </div>
        <div className="sidebar-right-side">
          {/* when u scroll to this section the animations trigger  */}
          <h1>WHAT I SPECIALIZE IN</h1>

          <p>REACT</p>
          <div className="container">
            <div className={`skills react ${scroll ? "scroll1" : null}`}>{scroll ? <h6><CountUp end={90} duration={1} />%</h6> : <h6>0%</h6>}</div>
          </div>


          <p>JAVASCRIPT</p>
          <div className="container">
            <div className={`skills js ${scroll ? "scrollJS" : null}`}>{scroll ? <h6><CountUp end={90} duration={1} />%</h6> : <h6>0%</h6>}</div>
          </div>

          <p>GITHUB</p>
          <div className="container">
            <div className={`skills github ${scroll ? "scroll2" : null}`}>{scroll ? <h6><CountUp end={80} duration={1} />%</h6> : <h6>0%</h6>}</div>
          </div>

          <p>NODE</p>
          <div className="container">
            <div className={`skills node ${scroll ? "scroll3" : null}`}>{scroll ? <h6><CountUp end={75} duration={1} />%</h6> : <h6>0%</h6>}</div>
          </div>


          <p>MONGODB</p>
          <div className="container">
            <div className={`skills mongodb ${scroll ? "scroll4" : null}`}>{scroll ? <h6><CountUp end={70} duration={1} />%</h6> : <h6>0%</h6>}</div>
          </div>

          <p>BOOTSTRAP</p>
          <div className="container">
            <div className={`skills bootstrap ${scroll ? "scroll5" : null}`}>{scroll ? <h6><CountUp end={60} duration={1} />%</h6> : <h6>0%</h6>}</div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Sidebar