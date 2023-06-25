import about from '../../assets/videos/about.mp4'
import React, { useState,useEffect } from "react"
import "./about.css";
import { useModal } from 'react-hooks-use-modal';


export default function About({errorMessage, setInfo}) {
  const [message, setMessage] = useState("Welcome to my website, Here you will see things you've never seen before");
  const [buttonMessage, setButtonMessage] = useState("Play");
  const [showInfo, setShowInfo] = useState(false)
  const [Modal, open, close] = useModal('root', {
    closeOnOverlayClick: false,
    open:true,
  });

  const background = () => {
    setShowInfo(true)
    setInfo(true)
    close();
  }
  useEffect(() => {
    if(errorMessage){
      setMessage(errorMessage);
      setButtonMessage("OK");
    }
    open();
  }, [errorMessage])

    
    return (
      <div className="aboutContainer">
          <video playsInline data-keepplaying className="aboutVideo" autoPlay loop muted> <source src={about} type="video/mp4"></source> </video>    
          {showInfo ?  <div className="connectWalletBlock">
            <p>
            As a software engineer, I have gained recognition for successfully implementing advanced methodologies in the financial services industry and startup environments. I specialize in tackling complex challenges and excel in developing innovative and imaginative solutions. I firmly believe that a combination of unwavering passion and persistent effort is crucial for surpassing established benchmarks. Additionally, I have a strong enthusiasm for adopting emerging technologies and possess a remarkable ability to quickly acquire new skills. I am particularly drawn to designing improved solutions using modern architecture and actively pursuing solution architect certifications to further enhance my expertise.
            </p>
          </div> : <></>}
          <Modal>
              <div>
                <div className="info_form">
                  <div className="welcome_input" >{message}</div>
                  <button className="start_button"  onClick={()=>background()} >{buttonMessage}</button>
                </div>
              </div>
            </Modal>
      </div>
    )
  
}