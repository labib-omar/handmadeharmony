import React, { useState } from 'react'
import "./Navbar.css";
import logo from '../Assets/Project Pic/Logo/Logo-H-H-handmade-harmony-1.png'
import  cart_icon from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu,setmenu]=useState(  "home"  );
    const {getTotalCartItems}=useContext(ShopContext);
  return (<>
        <div className="head-logo-container">

            <div className='head-socialmedia'>socialmedia</div>

            <div className="logo">
                <img src={logo} alt="logo" />
                {/* { <p>Handmade Harmony</p> } */}
            </div>

            {/* <div className="head-login">
                <Link  to='/login'><button>Login</button></Link> 
            </div> */}
            <div className="head-login" onClick={() => setmenu("login")}>
    <Link to="/login">
        <button>Login</button>
    </Link>
    {menu === "login" ?null :   <></>}
</div>

        </div>
        

        <div className="navbar">

            <div className='nav-search'></div>
       
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("home"   )}}><Link to='/'>HOME</Link>           {menu ==="home"?<hr/>:<></>}   </li>
                <li onClick={()=>{setmenu("shop"   )}}><Link to='/shop'>SHOP</Link>       {menu ==="shop"?<hr/>:<></>}   </li>
                <li onClick={()=>{setmenu("contact")}}><Link to='/contact'>CONTACTS</Link>{menu ==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("about"  )}}><Link to='/about'>ABOUT</Link>     {menu ==="about"?<hr/>:<></>}  </li>
            </ul> 


            <div className="nav-cart">
                <Link to='/cart'><img src={cart_icon} alt='cart icon' /></Link>
                
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
      </>
    
  )
}

export default Navbar
