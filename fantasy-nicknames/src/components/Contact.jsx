import React, { useState } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = (e) => {
    if (name && email && message && isValidEmail(email)) {
      const serviceId = "service_9azyevo";
      const templateId = "template_4mnb1xq";
      const userId = "rYIieeVGo0a9Yddvi";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      if (!name) {
        alert("Please fill in name field");
        e.preventDefault();
      } else if (!email) {
        alert("Please fill in email field");
        e.preventDefault();
      } else if (!message) {
        alert("Please fill in message field");
        e.preventDefault();
      } else {
        alert("Please enter valid email address");
        e.preventDefault();
      }
    }
    e.preventDefault();
  };

  return (
    <>
      <div className="contactForm">
        <div className="contact">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__text">
            Get in touch with me using this contact from
          </p>
        </div>
        <div className="form">
          <form>
            <div className="formContainer">
              <div className="nameContainer">
                <label htmlFor="name" className="form__name-label">
                  Name
                </label>
                <input
                  className="form__name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="emailContainer">
                <label htmlFor="email" className="form__email-label">
                  Email
                </label>
                <input
                  className="form__email"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="descriptionContainer">
                <label htmlFor="message" className="form__description-label">
                  Message
                </label>
                <textarea
                  className="form__description"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button onClick={submit} className="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className={`success ${emailSent ? "visible" : null}`}>
            <h2 className="success__title">Success</h2>
            <p className="success__text">
              I'll be in contact as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
