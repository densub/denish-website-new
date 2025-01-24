import about from '../../assets/videos/about.mp4'
import React, { useState, useEffect } from "react"
import "./about.css";
import { useModal } from 'react-hooks-use-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function About({errorMessage, setInfo}) {
  const [message, setMessage] = useState("Welcome to my website, Here you will see things you've never seen before");
  const [buttonMessage, setButtonMessage] = useState("Play");
  const [showInfo, setShowInfo] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [Modal, open, close] = useModal('root', {
    closeOnOverlayClick: false,
    open: true,
  });

  const texts = [
    {
        content: "As a software engineer and an AI and Quantum Computing enthusiast, I have gained recognition for successfully implementing advanced methodologies in the financial services industry and startup environments. My work focuses on addressing complex challenges, developing innovative and imaginative solutions, and pushing the boundaries of technological possibilities. My passion for AI and Quantum Computing drives me to explore their potential to revolutionize industries. I firmly believe that combining unwavering passion with persistent effort is crucial for surpassing established benchmarks. Additionally, I am always eager to adopt emerging technologies, demonstrating a remarkable ability to acquire new skills quickly.",
        type: "intro"
    },
    {
        content: "Quantum computers harness quantum mechanics to perform calculations exponentially faster than classical computers. They use quantum bits (qubits) that can exist in multiple states simultaneously, enabling parallel processing at an unprecedented scale.",
        type: "fact",
        diagram: "quantum-diagram"
    },
    {
        content: "Current encryption methods like RSA rely on the difficulty of factoring large numbers. Quantum computers using Shor's algorithm could break these encryptions in minutes, posing significant security risks to our digital infrastructure.",
        type: "security",
        diagram: "security-diagram"
    },
    {
        content: "AI systems use neural networks inspired by human brains, processing data through interconnected layers of artificial neurons. Through deep learning, they can recognize patterns, make decisions, and even generate creative content.",
        type: "fact",
        diagram: "neural-diagram"
    },
    {
        content: "The convergence of AI and Quantum Computing has the potential to unlock capabilities we've only dreamed of. Quantum-powered AI could solve problems that are currently computationally infeasible, such as simulating highly complex systems or enhancing decision-making with unparalleled precision. However, this rapid progress comes with challenges, particularly in security and ethics, as society adapts to a reality where machines can think and compute faster than ever before.",
        type: "future",
        diagram: "future-diagram"
    },
    {
        content: "Quantum computers are on the verge of redefining computational limits. Their ability to solve problems like molecular simulations, optimization challenges, and cryptographic systems far surpasses classical computers. As they mature, we can expect groundbreaking advancements in fields like pharmaceuticals, materials science, and artificial intelligence.",
        type: "fact",
        diagram: "quantum-evolution-diagram"
    },
    {
        content: "AI continues to transform industries such as healthcare, education, finance, and more. Generative AI models are now bridging the gap between human creativity and machine efficiency, creating art, music, and coding frameworks that redefine productivity.",
        type: "fact",
        diagram: "ai-impact-diagram"
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

  useEffect(() => {
    if(errorMessage){
      setMessage(errorMessage);
      setButtonMessage("OK");
    }
    open();
  }, [errorMessage]);

  return (
    <div className="aboutContainer">
      <video playsInline data-keepplaying className="aboutVideo" autoPlay loop muted>
        <source src={about} type="video/mp4"></source>
      </video>    
      {showInfo && (
        <div className="connectWalletBlock">
          <div className={`text-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <p>{texts[currentTextIndex].content}</p>
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
        <div>
          <div className="info_form">
            <div className="welcome_input">{message}</div>
            <button className="start_button" onClick={background}>{buttonMessage}</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}