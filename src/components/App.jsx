import React from "react";
import Crew from "./Crew";
import Destination from "./Destination";
import Home from "./Home";
import Technology from "./Technology";
import Error from "./404.jsx";
import Header from "./Header.jsx";
import Planet from "./Planet";
import CrewInstance from "./CrewInstance";
import TechnologyInstance from "./TechnologyInstance";
import {Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="main">
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "Destination" element = {<Destination />} >
                    <Route key = "-1" index element = {<Planet data = {props.data.destinations[0]} forlink = {props.data.destinations.map(function(x){
                            return x.name;
                        })} />} />
                    {props.data.destinations.map(function(destiny, i){
                        return (<Route key = {i} path = {destiny.name} element = {<Planet data = {destiny} forlink = {props.data.destinations.map(function(x){
                            return x.name;
                        })} />}></Route>)
                    })}
                </Route> 
                <Route path = "Crew" element = {<Crew />}>
                    <Route key = "-1" index element = {<CrewInstance data = {props.data.crew[0]} forlink = {props.data.crew.map(function(x){
                            return x.name;
                        })}/>} />
                    {props.data.crew.map(function(crew, i){
                        return (<Route key = {i} path = {crew.name.replaceAll(" ", "")} element = {<CrewInstance data = {crew} forlink = {props.data.crew.map(function(x){
                            return x.name;
                        })}/>}></Route>)
                    })}
                </Route>
                <Route path = "Technology" element = {<Technology />}>
                    <Route key = "-1" index element = {<TechnologyInstance data = {props.data.technology[0]} forlink = {props.data.technology.map(function(x){
                            return x.name;
                        })} />} />
                    {props.data.technology.map(function(tech, i){
                        return (<Route key = {i}  path = {tech.name.replaceAll(" ", "")} element = {<TechnologyInstance data = {tech} index = {i+1} forlink = {props.data.technology.map(function(x){
                            return x.name;
                        })} />}></Route>)
                    })}
                </Route>
                <Route path = "*" element = {<Error />} />
            </Routes>
        </div>
    )
}

export default App;