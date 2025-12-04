import React from "react";
import './Css/Contact.css';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"; 
// import contactimage from '../Components/Assets/Project Pic/About page/hand-making.crochet-in-bluecolor-for-about-page.jpg';





const Contact = () => {
  return (
    <div className="contact-page">

            <Navbar />

       <div className="contact-hero">
        <h1>Contact Us</h1>
        {/* <img src={contactimage} alt="Contact Us" /> */}
      </div>

      
       <div className="contact-top-text">
        <h2>Have You any Question?</h2>
         <p>We're here for You.</p>
        <hr/>
           </div>

    
      <div className="contact-box-container">

        <div className="contact-box">
           <h3>Sales</h3>
          <p>Got questions about products?</p>
           <p>Reach out for availability,custom orders & pricing.</p>
           <span>+491705550199</span>
        </div>

         <div className="contact-box">
          <h3>Complaints</h3>
          <p>Something didn’t go right?</p>
            <p>We’re here to listen and improve your experience.</p>
          <span>+495119871234</span>
          </div>

        <div className="contact-box">
          <h3>Returns</h3>
           <p>Need to return an item?</p>
          <p>Email us with your order number.</p>
           <span>returns@hh-handmade.com</span>
        </div>

        <div className="contact-box">
            <h3>Marketing</h3>
          <p>Let’s collaborate!</p>
              <p>Press, social media, & partnerships.</p>
          <span>+49 511 654 7890</span>
          </div>
 
       </div>

       
      <div className="contact-section">
  
         <div className="contact-left">
           <h3>Don't be Shy!</h3>
             <h2>You tell us. We musst to listen.</h2>
          <p>
              We believe every message matters. Whether it’s a question,
            custom idea, or kind word, we're always happy to hear from you.
           </p>
        </div>

          <form className="contact-form">
            <input type="text" placeholder="Name" />
              <input type="text" placeholder="Subject" />
               <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
 <button>SEND MESSAGE</button>
            </form>
   
        </div>
<Footer  />
       </div>
  );
};

export default Contact;
