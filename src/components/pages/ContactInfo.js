import React from "react";
import "../styles/ContactInfo.css";

function ContactInfo() {

    return(
        <div className="container">
             <div class="col s12 m7">
                <h4>Email</h4>
                <div class="card horizontal brown lighten-5">
                    <div class="card-image">
                        {/* <img src="images/email_contact.png" alt=""/> */}
                    </div>
                    <div class="card-stacked">
                        <div class="card-content center-align">
                            <p>paolaagonzalezm@email.arizona.edu</p>
                            <p>paolaagonzalezm@gmail.com</p>
                        </div>
                        <div class="card-action">
                            <a href="mailto:paolaagonzalezm@email.arizona.edu" target="_blank" rel="noreferrer">Email Me</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="col s12 m7">
                <h4>Professional Media</h4>
                <div class="card horizontal brown lighten-5">
                    <div class="card-image">
                        {/* <img src="images/github_contact.png" alt=""/> */}
                    </div>
                    <div class="card-stacked">
                        <div class="card-content center-align">
                            <p>GitHub: Pao1aG</p>
                            <p>LinkedIn: /paolaagonzalezm </p>
                        </div>
                        <div class="card-action">
                            <a  href="https://www.github.com/Pao1aG/" target="_blank" rel="noreferrer">GitHub</a>
                            <a  href="https://www.linkedin.com/in/paolaagonzalezm/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ContactInfo; 