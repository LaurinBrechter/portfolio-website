import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Data Analyst", "Tutor", "Consultant"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/graph.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, We are</h2>
          <h1>VertexAnalytics</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <p>Discover high ROI Machine Learning Projects for your company</p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        
      </div>
    </div>
  );
}