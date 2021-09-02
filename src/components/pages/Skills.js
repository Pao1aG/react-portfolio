import React from "react";
import "../styles/Skills.css"

function Skills() {
    return(
        <div className="row">
            <div className="center-align skills-box">
                <div className="col skill z-depth-1">
                    <h3 className="skill-title"> Tools </h3>
                        <p> VS Code </p>
                        <p> Git Bash </p>
                        <p> Insomnia </p>
                        <p> MongoDB Compass </p>
                    <img src="images/icons/vs-code-white-200-200.png" alt="" className="skill-icon"/>
                </div>
                <div className="col skill z-depth-1">
                    <h3 className="skill-title"> Front-end </h3>
                        <p> JavaScript </p>
                        <p> jQuery </p>
                        <p> React </p>
                        <p> Handlebars </p>
                    <img src="images/icons/react-200-200.png" alt="" className="skill-icon"/>
                </div>
                <div className="col skill z-depth-1">
                    <h3 className="skill-title"> Frameworks </h3>
                        <p> Material-UI </p>
                        <p> Materialize </p>
                        <p> Bootstrap </p>
                        <p> Bulma </p>
                    <img src="images/icons/materialize-logo.png" alt="" className="skill-icon"/>
                </div>
                <div className="col skill z-depth-1">
                    <h3 className="skill-title"> Back-end </h3>
                        <p> Node.js </p>
                        <p> Express.js </p>
                        <p> Apollo/GraphQL </p>
                        <p> REST APIs </p>
                    <img src="images/icons/node-logo2.png" alt="" className="skill-icon"/>
                </div>
                <div className="col skill z-depth-1">
                    <h3 className="skill-title"> Databases </h3>
                        <p> MongoDB/Mongoose </p>
                        <p> MySQL/Sequelize </p>
                    <img src="images/icons/mongo-leaf.png" alt="" className="skill-icon"/>
                </div>
                <div className="col skill z-depth-1">
                    <h3 className="skill-title"> Servers </h3>
                        <p> Heroku </p>
                    <img src="images/icons/heroku-logo.png" alt="" className="skill-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;