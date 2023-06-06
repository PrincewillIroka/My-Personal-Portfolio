import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
  nameErrorField: false,
  emailErrorField: false,
  messageErrorField: false,
};

const Contact = () => {
  const [state, setState] = useState(initialState);

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      nameErrorField: false,
      emailErrorField: false,
      messageErrorField: false,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name) {
      setState({
        nameErrorField: true,
      });
    } else if (!state.email) {
      setState({
        emailErrorField: true,
      });
    } else if (!state.message) {
      setState({
        messageErrorField: true,
      });
    } else {
      axios
        .post("https://mandrillapp.com/api/1.0/messages/send.json", {
          data: {
            key: "",
            message: {
              from_email: state.email,
              to: [
                {
                  email: "princewilliroka@yahoo.com",
                  name: state.name,
                  type: "to",
                },
              ],
              autotext: "true",
              subject: `Princewill Iroka's Portfolio`,
              html: state.message,
            },
          },
        })
        .then(function (response) {
          console.log(response);
          setState(initialState);
        })
        .catch(function (response) {
          console.log(`Error: ${response}`);
        });
    }
  };

  return (
    <div className="about-container">
      <div className="hello-container">
        <div className="hello-wrapper">
          <span className="hello-text-1">Hello !</span>
          <span className="hello-text-2">
            feel free to reach out to me,
          </span>
          <span className="hello-text-3">for a project/consultation.</span>
        </div>

        <div className="mail-wrapper">
          <span className="span-or">OR</span>
          <span className="span-mail-title">Send me a mail:</span>
          <span className="span-mail-info">
            <a href="mailto:princewilliroka@yahoo.com">
              princewilliroka@yahoo.com
            </a>
          </span>
        </div>
      </div>
      <div className="form-container">
        <span className="contact-title">Contact Me Now</span>
        <form>
          <span className="field-info">
            {state.nameErrorField ? "Please fill your name" : ""}
          </span>
          <div className="field-wrapper">
            <i className="fas fa-user"></i>
            <input
              value={state.name}
              onChange={(e) => handleUserInput(e)}
              placeholder="Name"
              name="name"
            />
          </div>
          <span className="field-info">
            {state.emailErrorField ? "Please fill your email" : ""}
          </span>
          <div className="field-wrapper">
            <i className="far fa-envelope"></i>
            <input
              value={state.email}
              onChange={(e) => handleUserInput(e)}
              placeholder="Email"
              name="email"
            />
          </div>
          <span className="field-info">
            {state.messageErrorField ? "Please fill your message" : ""}
          </span>
          <div className="message-field-wrapper">
            <textarea
              value={state.message}
              onChange={(e) => handleUserInput(e)}
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
