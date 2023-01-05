import React, { useState } from "react";
export default function ContactSuccess() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/4f41f400-8d17-11ed-a003-6f0b76086b1c";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
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
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_top"
          >
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
                  required
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
                  required
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
                  required
                ></textarea>
                <input type="submit" value="Submit" className="submit" />
              </div>
            </div>
          </form>
          <div className="success">
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
