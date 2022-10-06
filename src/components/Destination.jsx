import React from "react";
import { Outlet } from "react-router-dom";
import Planet from "./Planet.jsx";
import Header from "./Header.jsx";



let backgroundStyles = {
    backgroundImage:`url("/media/images/destination/background-destination-desktop.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "scroll",
    backgroundSize: "cover"
}

const Destination = (props) => {
    return (
        <div className="main-layout" style={backgroundStyles}>
            <Header />
            <Outlet />
        </div>
    )
};


export default Destination;