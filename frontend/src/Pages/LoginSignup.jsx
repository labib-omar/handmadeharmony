import React from 'react'
import  './Css/LoginSignup.css'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



const LoginSignup = () => {
  const [agree, setAgree] = React.useState(false);


  const [state, setState] = React.useState("Login");
  const [formData, setFormData] = React.useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  const login = async () => {
    console.log("Login Function Executed", formData);
      let responseData;
    await fetch("http://localhost:4000/login", {
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    console.log("Signup function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }



  return (
  <div className='loginsignup-page'>
   <Navbar />

    <div className='loginsignup'>

      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-field">
          {state==="Sign Up"?
          <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' />:
          <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>

        {/* <button onClick={() =>{state==="Login"?login():signup()}}>Continue</button> */}

        <button
  onClick={() => {
    if (!agree) {
      alert("Please agree to the terms to continue.");
      return;
    }
    state === "Login" ? login() : signup();
  }}
>
  Continue
</button>



        {state==="Sign Up"?
        <p className="loginsignup-login">Alredy have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:
        <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }



        <div className="loginsignup-agree">
          {/* <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use &nbsp;
            <a
  href="/privacy-policy"
  target="_blank"
  rel="noopener noreferrer"
>
  Privacy Policy  
</a>
</p> */}
<div className="loginsignup-agree">
  <input
    type="checkbox"
    checked={agree}
    onChange={() => setAgree(!agree)}
  />
  <p>
    By continuing, I agree to the terms of use &nbsp;
    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
      Privacy Policy
    </a>
  </p>
</div>


        </div>

      </div>
    </div>

   <Footer />
  </div>
  )
}

export default LoginSignup