import react from "react";
import { NavLink } from "react-router-dom";

const Planet = (props) => {
    return (
    <section className="destination">
        <div className="pick">
            <h1><span className="grey">01</span> PICK YOUR DESTINATION</h1>
            <div className="planet">
                <img src={props.data.images.png} />
            </div>
        </div>
        <div className="dest-details">
            <nav className="destination-nav">
                {props.forlink.map(function(x, i){
                    return <NavLink key = {i} to = {`/Destination/${x}`}>{x.toUpperCase()}</NavLink>
                })}
            </nav>
            <div className="planet-details">
                <h1>{props.data.name.toUpperCase()}</h1>
                <p>{props.data.description}</p>
                <hr />
                <div className="arrange">
                    <div>
                        <p>AVG. DISTANCE</p>
                        <p className="big">{props.data.distance}</p>
                    </div> 
                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <p className="big">{props.data.travel}</p>
                    </div> 
                </div>
            </div>
        </div>
    </section>    
)};

export default Planet;