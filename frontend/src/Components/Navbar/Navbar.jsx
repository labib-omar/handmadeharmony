import React, { useState, useContext } from 'react';
import "./Navbar.css";
import logo from '../Assets/Project Pic/Logo/Logo-H-H-handmade-harmony-1.png'
import cart_icon from '../Assets/cart-icon.png'
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const NavLinks = () => (
        <>
            <li>
                <NavLink to="/" end onClick={handleLinkClick}>
                    {({ isActive }) => (
                        <>
                            HOME
                            {isActive && <hr />}
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop" onClick={handleLinkClick}>
                    {({ isActive }) => (
                        <>
                            SHOP
                            {isActive && <hr />}
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" onClick={handleLinkClick}>
                    {({ isActive }) => (
                        <>
                            ABOUT
                            {isActive && <hr />}
                        </>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to="/contacts" onClick={handleLinkClick}>
                    {({ isActive }) => (
                        <>
                            CONTACTS
                            {isActive && <hr />}
                        </>
                    )}
                </NavLink>
            </li>
        </>
    );

    // Cart Component - Defined once to be used in two different places
    const CartComponent = ({ className = '' }) => (
        <div className={`nav-cart ${className}`}>
            <Link to='/cart'><img src={cart_icon} alt='cart icon' /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    );

    return (
        <div className='header'>
            <div className="header-logo-container">
                {/* Mobile Menu Button */}
                <div className='mobile-menu-toggle' onClick={toggleMenu}>
                    <div className={menuOpen ? "hamburger open" : "hamburger"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className='free'>
                    {/* free */}
                </div>

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                {/* LOGIN/LOGOUT Button and MOBILE Cart */}
                <div className="header-login">
                    {localStorage.getItem("auth-token") ?
                        <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/") }}>Logout</button> :
                        <NavLink to="/login">
                            <button>Login</button>
                        </NavLink>}
                    
                    {/* MOBILE CART: Only visible on small screens (controlled by CSS) */}
                    <CartComponent className="mobile-cart-visible" />
                </div>
            </div>

            {/* Desktop Navigation (Hidden on Mobile by CSS) */}
            <div className="navbar">
                <div className='nav-search'>
                    {/* search */}
                </div>

                <ul className="nav-menu">
                    <NavLinks />
                </ul>
                
                {/* DESKTOP CART: Only visible on large screens (controlled by CSS) */}
                <CartComponent className="desktop-cart-visible" />
            </div>

            {/* Mobile Collapsible Menu */}
            {menuOpen && (
                <div className="mobile-nav-menu-wrapper">
                    <ul className="mobile-nav-menu">
                        <NavLinks />
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;