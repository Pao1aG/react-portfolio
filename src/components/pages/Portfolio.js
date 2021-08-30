import React from "react";
import Project from "./Project";
import Assignment from "./Assignment";
import "../styles/Portfolio.css";

const projects = [
    {
        title: "Events Near You!",
        img: "images/events.png",
        description: "Tech: MongoDB, Express.js, React.js, Node.js, Material-UI, PredictHQ API",
        github: "https://github.com/kirito714/ReactApp2021",
        deployed: "https://events-near-you-pg.herokuapp.com/",
    },
    {
        title: "Cities2See",
        img: "images/cities.png",
        description: "Tech: Sequelize/MySQL, Express.js, Node.js, Handlebars.js, Materialize, GeoDB Cities API",
        github: "https://github.com/Pao1aG/Cities2See",
        deployed: "https://cities2see.herokuapp.com/",
    },
    {
        title: "Hairdresser Website",
        img: "images/hairdresser.png",
        description: "Tech: HTML, CSS, JavaScript, Node.js, Google Maps API, Pexel API",
        github: "https://github.com/JMan4342/Hair-Dresser",
        deployed: "https://pao1ag.github.io/Hair-Dresser/",
    },
    {
        title: "Tech Blog",
        img: "images/techblog.png",
        description: "Tech: Sequelize/MySQL, Express.js, Node.js, Handlebars, and Bulma",
        github: "https://github.com/Pao1aG/Tech-Blog",
        deployed: "https://floating-brushlands-26906.herokuapp.com/signup",
    },
]

const assignments = [
    {
        title: "Weather Dashboard",
        img: "images/weather.png",
        description: "HTML, CSS, JavaScript, OpenWeatherMap API",
        github: "https://github.com/Pao1aG/Weather-Dashboard",
    },
    {
        title: "Workday Scheduler",
        img: "images/workday.png",
    description: "HTML, CSS, jQuery, Bootstrap",
        github: "https://github.com/Pao1aG/Workday-Scheduler",
    },
    {
        title: "Password Generator",
        img: "images/password.png",
        description: "HTML, CSS, JavaScript",
        github: "https://github.com/Pao1aG/Password-Generator",
    },
    {
        title: "Code Quiz",
        img: "images/quiz.png",
        description: "HTML, CSS, JavaScript",
        github: "https://github.com/Pao1aG/Code-Quiz",
    },
]

//MAP OVER CARD ARRAY TO FILL OUT PROJECT COMPONENT WITH PROPS
function Portfolio() {
    return(
        <>
        <div className="row">
            {projects.map((project) => 
            <Project 
            {...project}
            key={project.id} />)}
        </div>
        <div className="row">
            {assignments.map((assignment) => 
            <Assignment
            {...assignment}
            key={assignment.id}/>)}
        </div>
        </>
    )
}

export default Portfolio