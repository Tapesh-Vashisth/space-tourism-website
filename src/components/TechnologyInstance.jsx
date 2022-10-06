import react from "react";
import { NavLink } from "react-router-dom";

const TechnologyInstance = (props) => {
    return (
        <section className="tech">
            {window.screen.width < 798? <div className="techhead">
                <h1><span className="grey">03</span> SPACE LAUNCH 101</h1></div>: null
            }

            {window.screen.width  < 798 ? <div>
                <div className="tech-img">
                    <img src={window.screen.width > 798 ? props.data.images.portrait : props.data.images.landscape} />
                </div>
            </div> : null}
            <div className="content">

                {window.screen.width >= 798 ? <h1><span className="grey">03</span> SPACE LAUNCH 101</h1>: null}

                <div className="tech-split">
                    <nav className="tech-inner-nav">
                        {props.forlink.map(function(x, i){
                            return <NavLink key = {i} to = {`/Technology/${x.replaceAll(" ", "")}`}>{i + 1}</NavLink>
                        })}
                    </nav>
                    <div className="tech-content">
                        <div>
                            <p className="fs18">THE TERMINOLOGY...</p>
                            <h1 className="fs28">{props.data.name.toUpperCase()}</h1>
                        </div>
                        <p className="fs18">{props.data.description}</p>
                    </div>
                </div>
            </div>
            {window.screen.width >= 798 ? <div>
                <div className="tech-img">
                    <img src={window.screen.width > 798 ? props.data.images.portrait : props.data.images.landscape} />
                </div>
            </div> : null}
            
        </section>  
    )
}

export default TechnologyInstance;