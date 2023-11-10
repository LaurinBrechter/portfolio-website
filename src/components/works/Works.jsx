import "./works.scss"
import { WorksData } from "../data"
import { useState } from "react"
// import Plot from 'react-plotly.js';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) :
      setCurrentSlide(currentSlide < WorksData.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div id="works" className='works'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {WorksData.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}
                  </p>
                  <span>Projects</span>
                  <a href={d.link}>View on Medium</a>
                </div>
              </div>
              <div className="right">
                {/* <Plot
              data={[
                {
                  x: [1, 2, 3],
                  y: [2, 6, 3],
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
              ]}
              layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            /> */}
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>))}
      </div>
      <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
      <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick("right")} />
    </div>

  )
}
