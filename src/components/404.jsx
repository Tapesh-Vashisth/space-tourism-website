import React from "react";
import { Link } from "react-router-dom";

const Error = (props) => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>click below to go back to the home page: {<Link to="/" >Go</Link>}</p>
        </div>
    )
};

export default Error;