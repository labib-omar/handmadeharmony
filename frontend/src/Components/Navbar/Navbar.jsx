import React, { useState } from 'react'
import "./Navbar.css";
import logo from '../Assets/Logo-H-H-handmade-harmony-1.png'
import  cart_icon from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setmenu]=useState("shop");
  return (
    
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                {/* <p>Handmade Harmony</p> */}

            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link> {menu ==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>  {menu ==="home"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("contact")}}><Link style={{textDecoration:'none'}} to='/contact'>Contact</Link>  {menu ==="contact"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("about us")}}><Link style={{textDecoration:'none'}} to='/about'>About Us</Link>  {menu ==="about us"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link  to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className="NAV" />
            <div className="nav-cart-coun">0</div>
                 
            </div>
        </div>
      
    
  )
}

export default Navbar
