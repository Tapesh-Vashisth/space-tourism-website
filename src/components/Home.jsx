import React from "react";
import Header from "./Header.jsx";

let backgroundStyles = {
    backgroundImage:`url("/media/images/home/background-home-desktop.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "scroll",
    backgroundSize: "cover"
}

// if (window.screen.width < 768){
//     backgroundStyles = {
//         ...backgroundStyles, 
        
//     }
// }

const Home = (props) => {
    return (
        <div className="main-layout" style={backgroundStyles}>
            <Header />
            <section class = "home">
                <div>
                    <p className="fs28 uppercase">So, you want to travel to</p>
                    <p className="fs150 uppercase">Space</p>
                    <p className="fs18">Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>
                <div>
                    <div></div>
                    <button className="explore">EXPLORE</button>
                </div>
            </section>
        </div>
    )
};

export default Home;