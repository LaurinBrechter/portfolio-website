import "./testimonials.scss"

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" alt="" className="left"/>
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" alt="" className="right"/>
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
        </div>
      </div>
    </div>
  )
}
