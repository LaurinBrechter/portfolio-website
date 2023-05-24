import "./contact.scss";
import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div id="contact" className='contact'>
      {/* Contact */}
      {/* <div className="top">
        Hello
      <img src="./assets/brownian_covariance.gif"></img>
      </div> */}
      <div className="right">
        <h2>Get in touch.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
          {message && <span>Thanks, we will get back to you asap</span>}
        </form>
      </div>
      <div className="impressum">Impressum: Laurin Brechter Tharandter Straße 45b 01159 Dresden Umsatzsteuer-ID: 123456 Wirtschafts-ID: 9667886</div>
      <img src="assets/network_graph.png"></img>
      

    
    </div>

    
  )
}

export default Contact


