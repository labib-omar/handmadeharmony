import React from "react";
import "./Css/About.css";
import About_icon from '../Components/Assets/post-1-during-making-the-doll.png';
import Sarah from '../Components/Assets/Sarah.png';
import Hadil from '../Components/Assets/Hadil.png';
import John from '../Components/Assets/John.png'; 
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"; 

const About = () => { 
  return (
    <div className="about-page">

     <Navbar />

      <div className="about-header">

        <h1>About Us</h1>
        
        <hr className='hr'/>

      </div>

      <div className="about-who-we-are">

        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            At H.H, every stitch tells a story. Founded by Hadil, a lifelong lover 
            of colors, textures, and tiny details, we turn simple threads into dolls 
            and figures full of personality. What began as a relaxing hobby quickly 
            grew into a passion for creating characters that spark joy, comfort, 
            and a sense of childhood wonder.
          </p>

        </div>

        <div className="about-img">
          <img src={About_icon} alt="team" />
        </div>
      </div>

      <div className="about-section-title">

        <h3>A Few Words About</h3>

        <h2>Our Team</h2>

        <div className="line"></div>
      </div>

      <div className="about-team">
        <div className="team-card">
          <img src={John} alt="ceo" />
          <h4>John Dimer</h4>
          <p>CEO</p>
        </div>

        <div className="team-card">
          <img src={Hadil} alt="founder" />
          <h4>Hadil Cross</h4>
          <p>Founder - CEO</p>
        </div>

        <div className="team-card">
          <img src={Sarah}alt="marketing" />
          <h4>Sarah Smith</h4>
          <p>Marketing Head</p>
        </div>
      </div>


      <div className="about-values">
        <h2>Our Values</h2>
        <div className="line"></div>
        <p>
          Creativity & Care: Patience, precision, and a lot of heart go into every stitch.  
          Quality First: Durable materials and thoughtful construction for keepsakes that last.  
          Fair & Transparent: Honest pricing that respects both the craft and our customers.
        </p>
      </div>


      <div className="about-dream">
        <h2>Our Dream</h2>
        <div className="line"></div>
        <p>
          To share handmade art with people who truly appreciate it—near and far—and to build  
          a community that recognizes our characters around the world.
        </p>
      </div>


      <div className="about-community">
        <h2>Join Our Community</h2>
        <div className="line"></div>
        <p>
          Follow our journey, discover new releases, and meet our characters on Instagram,  
          Facebook, YouTube, and TikTok. Your messages, photos, and feedback help us shape  
          future designs and keep the harmony in Handmade Harmony.
        </p>

        <h4>We're honoured to create something special, just for you.</h4>
      </div>


     

      <div className="about-features">
        <div className="feature-box">
          <h4>Worldwide Shipping</h4>
          <p>We deliver handmade joy to your door, wherever you are.</p>
        </div>

        <div className="feature-box">
          <h4>Best Quality</h4>
          <p>Carefully crafted using high-quality materials.</p>
        </div>

        <div className="feature-box">
          <h4>Fair Price</h4>
          <p>Honest pricing that respects both you and the craft.</p>
        </div>

        <div className="feature-box">
          <h4>Secure Payments</h4>
          <p>Encrypted & simple & safe online transactions.</p>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default About;