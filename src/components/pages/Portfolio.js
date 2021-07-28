import React from "react";
import Project from "../Project";
import "../styles/Portfolio.css";

//PORTFOLIO
    //render Project.js

//MAP OVER CARD ARRAY TO FILL OUT PROJECT COMPONENT WITH PROPS
function Portfolio() {
    return(
        <div className="row">
            <Project />
        </div>
    )
}

export default Portfolio