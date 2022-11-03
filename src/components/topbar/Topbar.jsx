import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div id="topbar" className='topbar'>
        <div className="wrapper">
          <div className="left">
              <a href="#intro" className="logo">Genius.</a>
              <div className="itemContainer">
              <Person/>
              <Mail/>
              </div> 
          </div>

          <div className="right">
            this is right
            
           </div>
        </div>
    </div>
  )
}
