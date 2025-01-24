import about from '../../assets/videos/about.mp4'
import React, { useState, useEffect } from "react"
import "./about.css";
import { useModal } from 'react-hooks-use-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

export default function About({errorMessage, setInfo}) {
  const [message, setMessage] = useState(
    `<span class="access-granted">< ACCESS GRANTED ></span>
    <span class="loading">Loading: Unprecedented technological manifestations</span>
    <span class="status">Warning: Reality distortion imminent</span>`
  );
  const [buttonMessage, setButtonMessage] = useState("Play");
  const [showInfo, setShowInfo] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [Modal, open, close] = useModal('root', {
    closeOnOverlayClick: false,
    open: true,
  });
  const [showButton, setShowButton] = useState(false);

  const texts = [
    {
      content: `<span class="scan-complete">< SYSTEM SCAN COMPLETE ></span>
      <span class="entity-type">Entity type: Advanced Software Engineer</span>
      <span class="primary-function">Primary functions: Quantum manipulation + AI synthesis</span>
      <span class="mission">Mission: Revolutionize reality through code across any dimensions</span>`,
      type: "intro"
    },
    {
        content: "Quantum computers harness quantum mechanics to perform calculations exponentially faster than classical computers. They use quantum bits (qubits) that can exist in multiple states simultaneously, enabling parallel processing at an unprecedented scale.",
        type: "fact",
    },
    {
        content: "Current encryption methods like RSA rely on the difficulty of factoring large numbers. Quantum computers using Shor's algorithm could break these encryptions in minutes, posing significant security risks to our digital infrastructure.",
        type: "security",
    },
    {
        content: "AI systems use neural networks inspired by human brains, processing data through interconnected layers of artificial neurons. Through deep learning, they can recognize patterns, make decisions, and even generate creative content.",
        type: "fact",
    },
    {
        content: "The convergence of AI and Quantum Computing has the potential to unlock capabilities we've only dreamed of. Quantum-powered AI could solve problems that are currently computationally infeasible, such as simulating highly complex systems or enhancing decision-making with unparalleled precision. However, this rapid progress comes with challenges, particularly in security and ethics, as society adapts to a reality where machines can think and compute faster than ever before.",
        type: "future",
    },
    {
        content: "Quantum computers are on the verge of redefining computational limits. Their ability to solve problems like molecular simulations, optimization challenges, and cryptographic systems far surpasses classical computers. As they mature, we can expect groundbreaking advancements in fields like pharmaceuticals, materials science, and artificial intelligence.",
        type: "fact",
    },
    {
        content: "AI continues to transform industries such as healthcare, education, finance, and more. Generative AI models are now bridging the gap between human creativity and machine efficiency, creating art, music, and coding frameworks that redefine productivity.",
        type: "fact",
    },
    {
        content: "What are your thoughts on the ethical implications of AI and Quantum Computing's rapid advancement?",
        type: "question"
    }
];

  const background = () => {
    setShowInfo(true)
    setInfo(true)
    close();
  }

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTextIndex((prev) => (prev - 1 + texts.length) % texts.length);
      setIsAnimating(false);
    }, 500);
  };

  const terminalText = {
    access: '<span class="access-granted">ACCESS GRANTED</span>',
    loading: '<span class="loading">Loading: Unprecedented technological manifestations</span>',
    warning: '<span class="warning">Warning: Reality distortion imminent</span>'
  };

  useEffect(() => {
    if(errorMessage){
      setMessage(errorMessage);
      setButtonMessage("OK");
    }
    open();
  }, [errorMessage]);

  return (
    <div className="aboutContainer">
      {/* Remove this video element
      <video playsInline data-keepplaying className="aboutVideo" autoPlay loop muted>
        <source src={about} type="video/mp4"></source>
      </video>    
      */}
      <div className="geometric-pattern">
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
      </div>
      {showInfo && (
        <div className="connectWalletBlock">
          <div className={`text-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <p dangerouslySetInnerHTML={{ __html: texts[currentTextIndex].content }}></p>
            {texts[currentTextIndex].diagram && (
              <div className={`diagram ${texts[currentTextIndex].diagram}`}></div>
            )}
          </div>
          <div className="navigation-arrows">
            {currentTextIndex > 0 && (
              <FontAwesomeIcon 
                icon={faArrowLeft} 
                className="nav-arrow left" 
                onClick={handlePrev}
              />
            )}
            {currentTextIndex < texts.length - 1 && (
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="nav-arrow right" 
                onClick={handleNext}
              />
            )}
          </div>
        </div>
      )}
      <Modal>
        <div className="terminal-container">
          <Typewriter
            options={{
              cursor: '▋',
              delay: 50,
              deleteSpeed: 1,
              html: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(terminalText.access)
                .pauseFor(200)
                .callFunction(() => {
                  document.querySelector('.access-granted').classList.add('flicker');
                })
                .pauseFor(2000)
                .typeString('<br/>')
                .typeString(terminalText.loading)
                .pauseFor(1200)
                .typeString('<br/>')
                .typeString(terminalText.warning)
                .pauseFor(1000)
                .callFunction(() => {
                  setShowButton(true);
                })
                .start();
            }}
          />
          {showButton && (
            <button className="proceed-button" onClick={background}>
               &lt;&lt; PROCEED &gt;&gt;
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}