import React from "react";
import "./Css/Contacts.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Contacts = () => {
  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-hero">
        <h1>Contact us for further inquiries</h1>
        <hr />
      </div>

      <div className="contact-top-text">
        <h2>We're here for You!</h2>
      </div>

      <div className="contact-box-container">
        <div className="contact-box">
          <h3>Sales</h3>
          <p>Got questions about products?</p>
          <p>Reach out for availability, custom orders & pricing.</p>
          <br />
          <span>+49 123 3456 7890</span>
        </div>

        <div className="contact-box">
          <h3>Marketing</h3>
          <p>Let’s collaborate!</p>
          <p>Press, social media, and worldwide partnerships.</p>
          <br />
          <span>+49 513 3456 7890</span>
        </div>

        <div className="contact-box">
          <h3>Complaints</h3>
          <p>Something didn’t go right?</p>
          <p>We’re here to listen and improve your experience.</p>
          <br />
          <span>+49 512 3456 7890</span>
        </div>

        <div className="contact-box">
          <h3>Returns</h3>
          <p>Need to return an item?</p>
          <p>Email us with your full name and order number.</p>
          <br />
          <span style={{ whiteSpace: "nowrap", marginTop: "7px" }}>
            returns@hh-handmadeharmony.com
          </span>
        </div>
      </div>

      <hr className="hr" />

      <div className="contact-section">
        <div className="contact-left">
          <h3>Don't be Shy!</h3>
          <h2>You tell us. We listen.</h2>
          <p>
            We believe every message matters, whether it’s a question, custom
            idea, or kind word, we're always happy to hear from you.
          </p>
        </div>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            minLength="3"
            maxLength="40"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            minLength="8"
            maxLength="40"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            maxLength="50"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            minLength="40"
            maxLength="300"
          ></textarea>

          <a href="mailto:contact@hh-handmadeharmony.com?subject=Customer Inquiry&body=Dear H.H Customer Service,">
            <button type="submit">SEND MESSAGE</button>
          </a>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
