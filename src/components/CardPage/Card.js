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
          <Popup className="social" open={openContactForm} onClose={()=>setOpen(false)} contentStyle={{backgroundColor:"black", opacity: "85%"}} position="right center">
              <div>
                <form className="info_form" ref={form} onSubmit={sendEmail}>
                  <input className="info_form_input" type="text" name="name" id="name" placeholder="Tag" required/>
                  <input className="info_form_input" type="email" name="email" id="email" placeholder="Email" required/>
                  <input className="info_form_input" type="text" name="subject" id="subject" placeholder="Subject" required/>
                  <textarea className="info_form_input" type="text" name="message" id="message" placeholder="Message..." required/>
                  <input className="info_form_button" type="submit" value="Send Signal"/>
                </form>
              </div>
         </Popup>
    </div> 
    <div>
          <Popup open={emailSendSuccess} onClose={()=>setEmailSendSuccess(false)} contentStyle={{backgroundColor:"black", opacity: "85%"}} position="right center">
              <div>
                <a className="successMessage">Communication Established</a>
              </div>
         </Popup>
    </div>
    </>
    );

      return (
        <div className = "cardContainer">
            <video className="cardVideo" playsInline data-keepplaying autoPlay loop muted> <source src={card} type="video/mp4" ></source></video>
            {renderSecondPageContent()}
        </div>
      )
  
}