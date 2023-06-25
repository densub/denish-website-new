import './Home.css'
import About from "./AboutPage/about"
import Card from "./CardPage/Card"
import ReactFullpage from "@fullpage/react-fullpage"
import { useState } from 'react';

export default function Home({ errorMessage }) {
    const anchors = ["About", "Card"];
    const [info, setInfo] = useState(false)

    
    return (
        <>
            <ReactFullpage
                
                anchors={anchors}
                navigation
                navigationTooltips={anchors}
                sectionsColor={["black", "black", "black"]}
                onLeave={(origin, destination, direction) => {
                    console.log("onLeave event", { origin, destination, direction });
                }}
                render={({ state, fullpageApi }) => {
                    console.log("render prop change", window.location.href); // eslint-disable-line no-console
                    fullpageApi?.setAllowScrolling(info)    
                    return (
                       <ReactFullpage.Wrapper>
                            <div className="section">
                                <About setInfo={setInfo} errorMessage={errorMessage}></About>
                            </div>
                            <div className="section">
                                <Card></Card>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>

    )
}