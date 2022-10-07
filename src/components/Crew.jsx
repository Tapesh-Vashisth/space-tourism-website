import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

let backgroundStyles = {
    backgroundImage:`url("../media/images/crew/background-crew-desktop.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "scroll",
    backgroundSize: "cover"
}

const Crew = (props) => {
    return (
        <div className="main-layout" style={backgroundStyles}>
            <Header />
            <Outlet />       
        </div>
    )
};

export default Crew;