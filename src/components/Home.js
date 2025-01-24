import './Home.css'
import About from "./AboutPage/about"
import Card from "./CardPage/Card"
import { useState } from 'react';

export default function Home({ errorMessage }) {
    const [info, setInfo] = useState(false)
    
    return (
        <div className="fullpage-container">
            <div className="section">
                <About setInfo={setInfo} errorMessage={errorMessage}></About>
            </div>
            <div className="section">
                <Card></Card>
            </div>
        </div>
    )
}