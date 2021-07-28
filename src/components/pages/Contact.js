import React from "react";
import "../styles/Contact.css";
//CONTACT ME
    // Contact form with fields for a name, email address, and message
        //Notification that field is required if cursor is moved without entering text
        //Notification if invalid email address is entered

function Contact() {
    return (
        <div className="container contactForm">
        <h4>Contact Me</h4>
        <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                  <input placeholder="Name" id="first_name" type="text" className="validate"/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                  <input placeholder="Email" id="email" type="email" className="validate"/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">message</i>
                  <textarea placeholder="Your Message" id="message" className="materialize-textarea"></textarea>
                </div>
              </div>
              <div className="center-align">
                  <button type="submit" className="btn waves-effect pink darken-3">Submit
                  <i className="material-icons right">send</i>
                  </button>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Contact;