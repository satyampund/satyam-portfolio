import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="container-fluid contact-me ">
        <div className=" container form-container">
          <form className="form-elements">
            <div className="element-holder">
              <label class="contact__form-label" for="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
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
                name="email"
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
                rows="10"
                class="text-aera"
                placeholder="Enter Your Message"
                name="message"
                id="message"></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
