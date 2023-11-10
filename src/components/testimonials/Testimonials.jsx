import "./testimonials.scss"
// import Plot from 'react-plotly.js';

export default function Testimonials() {
  return (
    <div id="page">
      <img class="background-img" src="assets/background_gaussian.png"></img>
    
      <div id="testimonials" className="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          <div className="card">
            <div className="top">
              {/* <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" alt="" className="left"/> */}
              {/* <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" alt="" className="right"/> */}
              <img src="assets/NYC_Accidents.png" alt="" />
            </div>
            <div className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis nulla 
              vero earum. Culpa ea ipsum laboriosam odio rem obcaecati. 
            </div>
            <div className="bottom">
              <h3>Elon</h3>
              <h4>CEO of Tesla</h4>
            </div>
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
          </div>
        </div>
      </div>
      
    </div>
  )
}
