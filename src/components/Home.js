import './Home.css'
import About from "./AboutPage/about"
import Card from "./CardPage/Card"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Home({ errorMessage }) {
    const [info, setInfo] = useState(false);
    const [currentSection, setCurrentSection] = useState(0);
    
    // Handle scroll events
    useEffect(() => {
        const container = document.querySelector('.fullpage-container');
        
        const handleScroll = () => {
            const section = Math.round(container.scrollTop / window.innerHeight);
            setCurrentSection(section);
        };
        
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to section
    const scrollToSection = (index) => {
        const container = document.querySelector('.fullpage-container');
        container.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fullpage-container">
            <div className="section">
                <About setInfo={setInfo} errorMessage={errorMessage} />
                {currentSection === 0 && (
                    <div className="scroll-indicator" onClick={() => scrollToSection(1)}>
                        <FontAwesomeIcon icon={faChevronDown} size="2x" />
                    </div>
                )}
            </div>
            <div className="section">
                <Card />
                {currentSection === 1 && (
                    <div className="scroll-indicator" onClick={() => scrollToSection(0)}>
                        <FontAwesomeIcon icon={faChevronUp} size="2x" />
                    </div>
                )}
            </div>
        </div>
    );
}