import React from 'react'
import "./Navbar.css";
import logo from '../Assets/logo.png'
import  cart_icon from '../Assets/cart-icon.png'

const Navbar = () => {
  return (
    
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>H.H</p>

            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt='' />
                 
            </div>
        </div>
      
    
  )
}

export default Navbar
