import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

//PORTFOLIO
    //render Project.js

//MAP OVER CARD ARRAY TO FILL OUT PROJECT COMPONENT WITH PROPS

const projects = [
    {
        title: "Hairdresser Website",
        img: "/images/sample-1.jpg",
        description: "",
        github: "https://github.com/JMan4342/Hair-Dresser",
        deployed: "https://jman4342.github.io/Hair-Dresser/Hairdresser.html",
        id: 1,
    },
    {
        title: "Tech Blog",
        img: "images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 2,
    },
    {
        title: "Cities2See",
        img: " images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 3,
    },
    {
        title: "Weather Dashboard",
        img: "images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 4,
    },
    {
        title: "Password Generator",
        img: "images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 5,
    },
    {
        title: "Workday Scheduler",
        img: "images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 6,
    },
    {
        title: "Code Quiz",
        img: "images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 7,
    },
    {
        title: "Team Profile Generator",
        img: "images/sample-1.jpg",
        description: "",
        github: "",
        deployed: "",
        id: 8,
    },
]

function Portfolio() {
    return(
        <div className="row">
            {projects.map((project) => 
            <Project 
            {...project}
            key={project.id} />)}
            
        </div>
    )
}

export default Portfolio