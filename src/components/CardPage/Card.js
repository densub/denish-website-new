import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import card from '../../assets/videos/card.mp4';
import "./Card.css";
import emailjs from '@emailjs/browser';
import twitter from '../../assets/logos/t.png'
import github from '../../assets/logos/g.png'
import linkedin from '../../assets/logos/l.png'

export default function Card() {
  const [openContactForm, setOpen] = useState(false);
  const [openSocial, setOpenSocial] = useState(false)
  const [emailSendSuccess, setEmailSendSuccess] = useState(false)
  const form = useRef();

  const openDetails = () => {
    setOpen(true)
  }

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_wpzlv2r', 'template_w8dp0pn', form.current, 'Exxndk2f7KdvTywlu')
    .then((result) => {
        console.log(result.text);
        setOpen(false)
        setEmailSendSuccess(true)
    }, (error) => {
        console.log(error.text);
        setEmailSendSuccess(false)
    });
};
   
  const renderSecondPageContent = () => (
    <>
    <div className="alien" onClick={() => setOpenSocial(true)}>
        <div className="background_message_button" contentStyle={{backgroundColor:"black", opacity: "85%"}} position="right center">
        <Popup  open={openSocial} onClose={()=>setOpenSocial(false)}>
            <a target="_blank" href="https://twitter.com/denishthetics"><img src={twitter}></img></a>
            <a target="_blank" href="https://github.com/densub"><img src={github}></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/subedidenish"><img src={linkedin}></img></a>
         </Popup>
        </div>
        

    </div>
    <div className="background_message_button" id="myForm">
            {emailSendSuccess || openSocial || openContactForm ? <></>: <a className="glow" onClick={openDetails}>Connect Beings</a>}
          <Popup 
            className="social" 
            open={openContactForm} 
            onClose={() => setOpen(false)} 
            position="center center"
          >
            <form className="info_form" ref={form} onSubmit={sendEmail}>
              <input 
                className="info_form_input" 
                type="text" 
                name="name" 
                placeholder="Tag" 
                required
              />
              <input 
                className="info_form_input" 
                type="email" 
                name="email" 
                placeholder="Email" 
                required
              />
              <input 
                className="info_form_input" 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required
              />
              <textarea 
                className="info_form_input" 
                name="message" 
                placeholder="Message..." 
                required
              />
              <button type="submit" className="info_form_button">
                Send Signal
              </button>
            </form>
          </Popup>
    </div> 
    <div>
          <Popup 
            open={emailSendSuccess} 
            onClose={() => setEmailSendSuccess(false)} 
            contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                border: "2px solid #32CD32",
                boxShadow: "0 0 30px rgba(50, 205, 50, 0.3)"
            }} 
            className="success"
            position="center center"
          >
            <div className="successMessage">
                Communication Established
            </div>
         </Popup>
    </div>
    </>
    );

      return (
        <div className = "cardContainer">
            {/* Remove this video element
            <video className="cardVideo" playsInline data-keepplaying autoPlay loop muted>
              <source src={card} type="video/mp4"></source>
            </video>
            */}
            <div className="geometric-pattern-card">
              <div className="rectangle-card"></div>
              <div className="rectangle-card"></div>
              <div className="rectangle-card"></div>
              <div className="rectangle-card"></div>
              <div className="rectangle-card"></div>
            </div>
            {renderSecondPageContent()}
        </div>
      )
  
}