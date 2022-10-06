import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className="logo">
                <img src="/media/images/shared/logo.svg"></img> 
            </div>
            <div className="nav">
                {/* {window.screen.width > 375 ? null: 
                <div>
                    <img src="/media/images/shared/icon-hamburger.svg"></img>
                </div>
                } */}
                <nav className=/*{window.screen.width > 375 ?*/ "normalnav" /* "hamburgernav"*/>
                    <NavLink to = "/"><span>00</span> Home</NavLink> 
                    <NavLink to = "/Destination"><span>01</span> Destination</NavLink> 
                    <NavLink to = "/Crew"><span>02</span> Crew</NavLink> 
                    <NavLink to = "/Technology"><span>03</span> Technology</NavLink> 
                </nav>
            </div>
        </header>
    )
};

export default Header;