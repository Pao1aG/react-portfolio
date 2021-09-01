import React from "react";
import Project from "./Project";
import Assignment from "./Assignment";
import "../styles/Portfolio.css";

const projects = [
    {
        title: "Events Near You!",
        img: "images/events.png",
        hiddenImg: "images/projects/EventsNearYou.png",
        tech: "Tech: MongoDB, Express.js, React.js, Node.js, Material-UI, PredictHQ API",
        description: "Users can create an account and search for events by location or artist and save them to their profile.",
        github: "https://github.com/kirito714/ReactApp2021",
        deployed: "https://events-near-you-pg.herokuapp.com/",
    },
    {
        title: "Cities2See",
        img: "images/cities.png",
        hiddenImg: "images/projects/cities2see.png",
        tech: "Tech: Sequelize/MySQL, Express.js, Node.js, Handlebars.js, Materialize, GeoDB Cities API",
        description: "Users can create an account and search for cities they are interested in visiting and save the city info to their profile.",
        github: "https://github.com/Pao1aG/Cities2See",
        deployed: "https://cities2see.herokuapp.com/",
    },
    {
        title: "Hairdresser Website",
        img: "images/hairdresser.png",
        hiddenImg: "images/projects/hairdresser.png",
        tech: "Tech: HTML, CSS, JavaScript, Node.js, Google Maps API, Pexel API",
        description: "Website for a hairdresser to advertise their services and for clients to find the salon location.",
        github: "https://github.com/JMan4342/Hair-Dresser",
        deployed: "https://pao1ag.github.io/Hair-Dresser/",
    },
    {
        title: "Tech Blog",
        img: "images/techblog.png",
        hiddenImg: "images/projects/TechBlog.png",
        tech: "Tech: Sequelize/MySQL, Express.js, Node.js, Handlebars, and Bulma",
        description: "Tech Blog where users can create an account and share their thoughts with other users.",
        github: "https://github.com/Pao1aG/Tech-Blog",
        deployed: "https://floating-brushlands-26906.herokuapp.com/signup",
    },
]

const assignments = [
    {
        title: "Weather Dashboard",
        img: "images/weather.png",
        hiddenImg: "images/projects/WeatherDashboard.png",
        tech: "Tech: HTML, CSS, JavaScript, OpenWeatherMap API",
        description: "Web application to view weather information and 5-day forecast for major cities around the world.",
        github: "https://github.com/Pao1aG/Weather-Dashboard",
        deployed: "https://pao1ag.github.io/Weather-Dashboard/"
    },
    {
        title: "Workday Scheduler",
        img: "images/workday.png",
        hiddenImg: "images/projects/WorkDayScheduler.png",
        tech: "Tech: HTML, CSS, jQuery, Bootstrap",
        description: "This web application can be used as a daily planner for the workday. Events/tasks can be saved or deleted. Saved tasks can be revisited even after page reload.",
        github: "https://github.com/Pao1aG/Workday-Scheduler",
        deployed: "https://pao1ag.github.io/Workday-Scheduler/"
    },
    {
        title: "Password Generator",
        img: "images/password.png",
        hiddenImg: "images/projects/PasswordGenerator.png",
        tech: "Tech: HTML, CSS, JavaScript",
        description: "Generate a random password string based on user's preferences of character length and the inclusion or exclusion of character types such as lowercase, uppercase, numeric, and special.",
        github: "https://github.com/Pao1aG/Password-Generator",
        deployed: "https://pao1ag.github.io/Password-Generator/"
    },
    {
        title: "Code Quiz",
        img: "images/quiz.png",
        hiddenImg: "images/projects/CodingQuiz.png",
        tech: "Tech: HTML, CSS, JavaScript",
        description: "Timed coding quiz with ability to save high time score",
        github: "https://github.com/Pao1aG/Code-Quiz",
        deployed: "https://pao1ag.github.io/Code-Quiz/"
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
            {/* <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">arrow_upward</i></a> */}
        </div>
        </>
    )
}

export default Portfolio