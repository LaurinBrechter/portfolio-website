import Intro from "./components/intro/Intro.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Contact from "./components/contact/Contact.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx"
import { useState } from "react";
import "./app.scss"
import Menu from "./components/menu/Menu.jsx";





function App() {

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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