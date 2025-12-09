import React, { useState } from 'react';
import  './NewsLetter.css'

const NewsLetter = () => {
  
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {

    if (email.trim() === "") {
      alert("Please enter your email first!");
      return;
    }

    alert("Subscribed Successfully");

    setEmail("");   
  };

  return (
    <div className='newsletter'>
        <h1>Get Exclusive On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated </p>

        <div>
            <input 
              type="email"
              placeholder='Your Email Address' 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <button onClick={handleSubscribe}>
              Subscribe
            </button>
        </div>
      
    </div>
  )
}

export default NewsLetter;
