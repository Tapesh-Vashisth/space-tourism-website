import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import data from "./data.json";
import "./styles.css";


ReactDOM.render(
    <BrowserRouter>
        <App data = {data} />
    </BrowserRouter>,
 document.getElementById("root"));

