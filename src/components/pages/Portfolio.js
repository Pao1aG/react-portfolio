import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

const projects = [
    {
        title: "Events Near You!",
        img: "images/events.png",
        github: "https://github.com/kirito714/ReactApp2021",
        deployed: "https://aqueous-peak-04279.herokuapp.com/",
    },
    {
        title: "Hairdresser Website",
        img: "images/hairdresser.png",
        github: "https://github.com/JMan4342/Hair-Dresser",
        deployed: "https://jman4342.github.io/Hair-Dresser/Hairdresser.html",
    },
    {
        title: "Tech Blog",
        img: "images/techblog.png",
        github: "https://github.com/Pao1aG/Tech-Blog",
        deployed: "https://floating-brushlands-26906.herokuapp.com/signup",
    },
    {
        title: "Cities2See",
        img: " images/cities.png",
        github: "https://github.com/Pao1aG/Cities2See",
        deployed: "https://cities2see.herokuapp.com/",
    },
    {
        title: "Weather Dashboard",
        img: "images/weather.png",
        github: "https://github.com/Pao1aG/Weather-Dashboard",
        deployed: "",
    },
    {
        title: "Password Generator",
        img: "images/password.png",
        github: "https://github.com/Pao1aG/Password-Generator",
        deployed: "",
    },
    {
        title: "Workday Scheduler",
        img: "images/workday.png",
        github: "https://github.com/Pao1aG/Workday-Scheduler",
        deployed: "",
    },
    {
        title: "Code Quiz",
        img: "images/quiz.png",
        github: "https://github.com/Pao1aG/Code-Quiz",
        deployed: "",
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