import React from 'react'
import './Footer.css'
import footerlogo from '../Assets/logo-big.png'
import instagramicon from '../Assets/instagram-icon.png'
import pintestericon from '../Assets/pintestericon.png'
import whatsapp from '../Assets/whatsapp-icon.png'


const Fotter = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerlogo} alt='' />
            <p>H.H</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About </li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagramicon} alt='' />
            </div>
             <div className="footer-icons-container">
                <img src={whatsapp} alt='' />
            </div>
             <div className="footer-icons-container">
                <img src={pintestericon} alt='' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved </p>
        </div>
      
    </div>
  )
}

export default Fotter
