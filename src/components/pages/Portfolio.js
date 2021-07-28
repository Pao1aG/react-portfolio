import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

//PORTFOLIO
    //render Project.js

//MAP OVER CARD ARRAY TO FILL OUT PROJECT COMPONENT WITH PROPS

const projects = [
    {
        title: "Hairdresser Website",
        img: "",
        description: "",
        github: "",
        deployed: ""
    },
]

function Portfolio() {
    return(
        <div className="row">
            {projects.map((project) => 
            <Project 
            title={projects.title} 
            img={projects.img}
            description={projects.description}
            github={projects.github}
            deployed={projects.deployed} />)}
            
        </div>
    )
}

export default Portfolio