import React from 'react';
import "./Navbar.css";
import logo from '../Assets/Project Pic/Logo/Logo-H-H-handmade-harmony-1.png'
import cart_icon from '../Assets/cart-icon.png'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
              


const Navbar = () => {
     const {getTotalCartItems}=useContext(ShopContext);
  return (  
    <div className='header'>

      <div className="header-logo-container">

          <div className='free'>
                {/* free */}
            </div>

        <div className="logo">
          <img src={logo} alt="logo" />
          {/* { <p>Handmade Harmony</p> } */}
        </div>

        <div className="header-login">
          {localStorage.getItem("auth-token")?
          <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>:
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>}

        </div>
      </div>

      <div className="navbar">

        <div className='nav-search'>
            {/* searh */}
            
        </div>

        <ul className="nav-menu">
          <li>
            <NavLink to="/" end>
              {({ isActive }) => (
                <>
                  HOME
                  {isActive && <hr />}
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop">
              {({ isActive }) => (
                <>
                  SHOP
                  {isActive && <hr />}
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              {({ isActive }) => (
                <>
                  ABOUT
                  {isActive && <hr />}
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacts">
              {({ isActive }) => (
                <>
                  CONTACTS
                  {isActive && <hr />}
                </>
              )}
            </NavLink>
          </li>
        </ul>

      

         <div className="nav-cart">
                <Link to='/cart'><img src={cart_icon} alt='cart icon' /></Link>
                
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;