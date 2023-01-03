import React from "react";
export default function Contact() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    //fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
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
          <form method="post" onSubmit={handleSubmit}>
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
                />
              </div>
              <div className="descriptionContainer">
                <label
                  htmlFor="description"
                  className="form__description-label"
                >
                  Description
                </label>
                <textarea
                  className="form__description"
                  name="description"
                  id="description"
                ></textarea>
                <input type="submit" value="Submit" className="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
