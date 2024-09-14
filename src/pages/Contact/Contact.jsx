import React from "react";
import "./Contact.css";
import submit from "../../assets/submit.png";

const contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="section-description">
        We'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="contact-form"
      >
        <input
          type="hidden"
          name="access_key"
          value="80b710ee-715e-48b2-a889-a4d0ea229683"
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="input-field"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message.."
          required
          name="message"
          className="textarea-field"
        ></textarea>
        <button className="submit-button">
          Submit now
          <img
            src={submit}
            className="button-icon"
            alt="Arrow Icon"
          />
        </button>
      </form>
    </div>
  );
};

export default contact;
