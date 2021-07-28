import React, { useState } from "react";
import "../styles/Contact.css";
import {validateEmail} from "../../utils/helpers";
//CONTACT ME
    // Contact form with fields for a name, email address, and message
        //Notification that field is required if cursor is moved without entering text
        //Notification if invalid email address is entered

function Contact() {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[message, setMessage] = useState("");
  const[errorMsg, setErrorMsg] = useState("");

  //For when an email address is being entered, update the useState to email in the input field
  const handleInputChange = (event) => {
    //this is the same as event.target
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    if(inputName === "email") {
      setEmail(inputValue);
      if(inputValue === "") {
        setErrorMsg("Email field is required")
        return;
      }
    } else if (inputName ==="name") {
      setName(inputValue);
      if(inputValue === "") {
        setErrorMsg("Name field is required")
        return;
      }
    } else if (inputName === "message") {
      setMessage(inputValue);
      if(inputValue === "") {
        setErrorMsg("Message field is required")
        return;
      }
    };

    setErrorMsg("");
    
  };

  //For when the form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!name) {
      setErrorMsg("Name field is required");
      return;
    }

    if(!email) {
      setErrorMsg("Email field is required");
      return;
    }

    if(!message) {
      setErrorMsg("Message field is required");
      return;
    }

    //run validateEmail using helpers and passing in email
    if(!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    };

    //Clear the input field from email entered previously
    setEmail("");
    setName("");
    setMessage("");
    setErrorMsg("");
  };

  return (
      <div className="container contactForm">
      <h4>Contact Me</h4>
      <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
                <input 
                placeholder="Name" 
                id="first_name" 
                type="text" 
                className="validate"
                name="name"
                value={name}
                onChange={handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
                <input 
                placeholder="Email" 
                id="email" 
                type="email" 
                className="validate" 
                name="email"
                value={email}
                onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
                <textarea 
                placeholder="Your Message" 
                id="message" 
                className="materialize-textarea"
                name="message"
                value={message}
                onChange={handleInputChange}>

                </textarea>
              </div>
            </div>
            {errorMsg && (
            <div className="center-align">
              <p id="errorMsg">{errorMsg}</p>
            </div>
            )}
            <div className="center-align">
                <button 
                type="submit" 
                className="btn waves-effect pink darken-3"
                onClick={handleFormSubmit}
                >Submit
                <i className="material-icons right">send</i>
                </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Contact;