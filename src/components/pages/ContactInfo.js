import React from "react";
import "../styles/ContactInfo.css";

function ContactInfo() {

    return(
        <div className="container contactDiv">
            <div className="flexDiv">
                <div className="col s12 m7">
                    <h4>Email</h4>
                    <div className="card brown lighten-5">
                        <div className="card-content center-align">
                            <p className="flow-text">paolaagonzalezm@gmail.com</p>
                        </div>
                        <div className="card-action">
                            <a href="mailto:paolaagonzalezm@gmail.com" target="_blank" rel="noreferrer" className="cyan-text text-darken-3">Email Me</a>
                        </div>
                    </div>
                </div>
                
                <div className="col s12 m7">
                    <h4>Professional Media</h4>
                    <div className="card brown lighten-5">
                        <div className="card-content center-align flow-text">
                            <p className="flow-text">GitHub: Pao1aG</p>
                            <p className="flow-text">LinkedIn: /paolaagonzalezm </p>
                        </div>
                        <div className="card-action">
                            <a  href="https://www.github.com/Pao1aG/" target="_blank" rel="noreferrer" className="cyan-text text-darken-3">GitHub</a>
                            <a  href="https://www.linkedin.com/in/paolaagonzalezm/" target="_blank" rel="noreferrer" className="cyan-text text-darken-3">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ContactInfo; 