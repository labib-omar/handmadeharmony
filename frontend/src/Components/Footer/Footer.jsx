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
             <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={instagramicon} alt='instagram-icon' />
             </a>
            </div>

            <div className="footer-icons-container">
             <a
              href="https://www.tiktok.com/search?q=crochet%20dolls&t=1765139995006"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={tiktok} alt='tiktok-icon' />
             </a>
            </div>

            <div className="footer-icons-container">
             <a
              href="https://www.facebook.com/facebook/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={facebook} alt='facebook-icon' />
             </a>
            </div>
                
            <div className="footer-icons-container">
             <a
              href="https://www.pinterest.com/search/pins/?q=crochet%20dolls&rs=ac&len=9&source_id=ac_ZKdmNh24&eq=crochet%20d&etslf=8972"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={pintestericon} alt='pintester-icon' />
             </a>
            </div>
                
            <div className="footer-icons-container">
             <a
              href="https://www.whatsapp.com/?lang=de"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={whatsapp} alt='whatsapp-icon' />
             </a>
            </div>  

        </div>

         <div className='footer-app'>
                  
            <div>
             <a
              href="https://www.apple.com/de/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img src={appstore} alt='app-store-icon' />
             </a>
            </div>
              
            <div>
             <a
              href="https://play.google.com/store/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img src={googleplay} alt='google-play-icon' />
             </a>
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
