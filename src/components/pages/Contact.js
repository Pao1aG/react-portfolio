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

  //For when an email address is being entered, update the useState to email in the input field
  const handleInputChange = (event) => {
    //this is the same as event.target
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    if(inputName === "email") {
      setEmail(inputValue);
      if(inputValue === "") {
        window.alert("This is a required field");
      }
    } else if (inputName ==="name") {
      setName(inputValue);
      if(inputValue === "") {
        window.alert("This is a required field");
      }
    } else if (inputName === "message") {
      setMessage(inputValue);
      if(inputValue === "") {
        window.alert("This is a required field");
      }
    }
    
  };

  // const handleEmptyInput = (event) => {
  //   const { target } = event;
  //   const inputName = target.name;
  //   const inputValue = target.value;

  //   if(inputName === "email" && inputValue === "") {
  //     window.alert("This is a required field");
  //   }
  //   if(inputName === "name" && inputValue === "") {
  //     window.alert("This is a required field");
  //   }
  //   if(inputName === "message" && inputValue === "") {
  //     window.alert("This is a required field");
  //   }
  // };
  

  //For when the form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();

    //run validateEmail using helpers and passing in email
    if(!validateEmail(email)) {
      window.alert("Please enter a valid email address");
      return;
    };

    //Clear the input field from email entered previously
    setEmail("");
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