import react from "react";
import { NavLink } from "react-router-dom";

const CrewInstance = (props) => {
    return (
        <section className="crew">
            <div className="crew-details">
                <h1><span className="grey">02</span> MEET YOUR CREW</h1>
                <div className="crew-inner">
                    <div>
                        <p>COMMANDER</p>
                        <p>{props.data.name.toUpperCase()}</p>
                    </div>
                    <p>{props.data.bio}</p>
                </div>
                <nav className="dots">
                    {props.forlink.map(function(x, index){
                       return <NavLink to={`/Crew/${x.replaceAll(" ", "")}`} key = {index}></NavLink>    
                    })}
                </nav>
            </div>
            <div className="crew-image">
                <img src={props.data.images.png} />
            </div>
        </section>
    )
}

export default CrewInstance;