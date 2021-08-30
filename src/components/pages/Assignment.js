import React from 'react';

// For each project (6 minimum) that is featured in your portfolio, include the following:

// An image of the deployed application (either a short animated GIF or screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository

function Assignment ({title, img, description, github}) {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    <img src={img} alt=""/>
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-desc center-align flow-text">
                    <p> {description} </p> 
                </div>
                <div className="card-action">
                    <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )

}

export default Assignment;