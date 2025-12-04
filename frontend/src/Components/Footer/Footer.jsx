import React from 'react'
import './Footer.css'
import logo from '../Assets/Project Pic/Logo/Logo-H-H-handmade-harmony-1.png'
import instagramicon from '../Assets/instagram.svg'
import pintestericon from '../Assets/pinterest.svg'
import whatsapp from '../Assets/whatsapp.svg'
import tiktok from '../Assets/tiktok.svg'
import facebook from '../Assets/facebook.svg'
import appstore from '../Assets/appstore.svg'
import googleplay from '../Assets/google-play.svg'




const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-logo">
            <img src={logo} alt='logo' />
        </div>

        <ul className='footer-links'>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Legal Notices</li>
          
        </ul>
        
        <div className="footer-socialmedia">
            <div className="footer-icons-container">
                <img src={instagramicon} alt='instagram-icon' />
            </div>

            <div className="footer-icons-container">
                <img src={tiktok} alt='tiktok-icon' />
            </div>

            <div className="footer-icons-container">
                <img src={facebook} alt='facebook-icon' />
            </div>
                
            <div className="footer-icons-container">
                <img src={pintestericon} alt='pintester-icon' />
            </div>
                
            <div className="footer-icons-container">
                <img src={whatsapp} alt='whatsapp-icon' />
            </div>  

        </div>

         <div className='footer-app'>
                  
            <div>
             <img src={appstore} alt='app-store-icon' />
            </div>
              
            <div>
             <img src={googleplay} alt='google-play-icon' />
            </div>
                        
         </div>

        

        <div className="footer-copyright">
            <hr/>

            <p>Copyright @ 2025 - All Right Reserved (H.H Handmade Harmony) </p>

            <hr style={{width: "40%"}}/>

            <p>Powered by H.H Handmade Harmony</p>
        </div>
      
    </div>
  )
}

export default Footer
