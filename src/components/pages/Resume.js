import React from "react";
import "../styles/Resume.css";
//RESUME
    //Downloadable resume and list of developer's proficiencies

function Resume() {

    return (
        <>
        <div className="center-align">
            <a href="images/paolaG_resume.png" download="Paola's Resume" id="download"> Click Here to Download Resume </a>
        </div>
        <div className="center-align">
            <img src="images/paolaG_resume.png" className="responsive-img" alt=""/>
        </div>
        </>
    )
}

export default Resume;