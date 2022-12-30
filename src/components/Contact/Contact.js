import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactImg from './../../assests/final.png';

const Contact = () => {
  return (
    <>
      <div className="container-fluid contact-me ">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-container-div">
          <h4 className="contact-des">
            Feel free to Contact me by submitting the form below and I will get back to you as soon
            as possible
          </h4>
        </div>

        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-md-6 order-2 order-md-1">
              <div className="form-container">
                <ContactForm />
              </div>
            </div>
            <div class="col-md-6 order-1 order-md-2">
              <img src={ContactImg} alt="contact" className="contact-img"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
