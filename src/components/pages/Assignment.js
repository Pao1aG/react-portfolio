import React from 'react';

// For each project (6 minimum) that is featured in your portfolio, include the following:

// An image of the deployed application (either a short animated GIF or screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository

function Assignment ({title, img, tech, description, github}) {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    <img src={img} alt=""/>
                </div>
                <div className="card-content">
                    <span className="card-title activator">{title}<i class="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title">{title}<i class="material-icons right">close</i></span>
                    <div className="card-desc center-align flow-text">
                        <p> {tech} </p> 
                        <p> {description} </p> 
                    </div>
                </div>
                <div className="card-action">
                    <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )

}

export default Assignment;