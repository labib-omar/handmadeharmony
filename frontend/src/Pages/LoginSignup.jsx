import React from 'react'
import  './Css/LoginSignup.css'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"; 

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
            <Navbar />

      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Alredy have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of  use & privacy policy.</p>
        </div>
      </div>
      <Footer  />
    </div>
  )
}

export default LoginSignup
