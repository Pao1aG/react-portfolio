import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

const projects = [
    {
        title: "Hairdresser Website",
        img: "images/hairdresser.png",
        github: "https://github.com/JMan4342/Hair-Dresser",
        deployed: "https://jman4342.github.io/Hair-Dresser/Hairdresser.html",
        id: 1,
    },
    {
        title: "Tech Blog",
        img: "images/techblog.png",
        github: "https://github.com/Pao1aG/Tech-Blog",
        deployed: "https://floating-brushlands-26906.herokuapp.com/signup",
        id: 2,
    },
    {
        title: "Cities2See",
        img: " images/cities.png",
        github: "https://github.com/Pao1aG/Cities2See",
        deployed: "https://cities2see.herokuapp.com/",
        id: 3,
    },
    {
        title: "Weather Dashboard",
        img: "images/weather.png",
        github: "https://github.com/Pao1aG/Weather-Dashboard",
        deployed: "",
        id: 4,
    },
    {
        title: "Password Generator",
        img: "images/password.png",
        github: "https://github.com/Pao1aG/Password-Generator",
        deployed: "",
        id: 5,
    },
    {
        title: "Workday Scheduler",
        img: "images/workday.png",
        github: "https://github.com/Pao1aG/Workday-Scheduler",
        deployed: "",
        id: 6,
    },
    {
        title: "Code Quiz",
        img: "images/quiz.png",
        github: "https://github.com/Pao1aG/Code-Quiz",
        deployed: "",
        id: 7,
    },
    {
        title: "Team Profile Generator",
        img: "images/team.png",
        github: "https://github.com/Pao1aG/Team-Profile-Generator",
        deployed: "",
        id: 8,
    },
]

//MAP OVER CARD ARRAY TO FILL OUT PROJECT COMPONENT WITH PROPS
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