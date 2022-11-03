import Intro from "./components/intro/Intro.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Contact from "./components/contact/Contact.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx"


import "./app.scss"



function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro/>
        <Contact/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
