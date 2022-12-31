import React from 'react';
import './ContactForm.css';

const EMAIL_KEY = process.env.REACT_APP_EMAIL_KEY;

const ContactForm = () => {
  return (
    <>
      <form className="form-elements" action={EMAIL_KEY} method="POST">
        <div className="element-holder">
          <label class="contact__form-label" for="name">
            Name
          </label>
          <input
            required
            placeholder="Enter Your Name"
            type="text"
            class="contact__form-input"
            name="Name"
            id="name"
          />
        </div>
        <div className="element-holder">
          <label class="contact__form-label" for="email">
            Email
          </label>
          <input
            required
            placeholder="Enter Your Email"
            type="email"
            class="contact__form-input"
            name="Email"
            id="email"
          />
        </div>
        <div className="element-holder">
          <label class="contact__form-label" for="message">
            Message
          </label>
          <textarea
            required
            cols="30"
            rows="7"
            class="text-aera"
            placeholder="Enter Your Message"
            name="Message"
            id="message"></textarea>
        </div>
        <button type="submit" class="css-button-rounded--sky">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
