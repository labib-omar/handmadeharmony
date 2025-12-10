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
import { Link } from 'react-router-dom'




const Footer = () => {
  return (


    <div className='footer'>

        <div className="footer-logo">
            <img src={logo} alt='logo' />
        </div>
{/* 
        <ul className='footer-links'>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Legal Notices</li>
          
        </ul> */}

        <div  className='footer-links'> 
             <ul>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        {/* <li><Link to="/privacy-policy">Privacy Policy</Link></li> */}
        <a
  href="/privacy-policy"
  target="_blank"
  rel="noopener noreferrer"
>
  Privacy Policy
</a>

        {/* <li><Link to="/legal-notice">Legal Notice</Link></li> */}
        <a
  href="/legal-notice"
  target="_blank"
  rel="noopener noreferrer"
>
  Legal Notice
</a>

        </ul>

      </div>
      

        
        <div className="footer-socialmedia">

          
          <a 
            href="https://www.instagram.com/popular/crochet-doll/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="footer-icons-container">

              <img src={instagramicon} alt='instagram-icon' />
            </div>
          </a>
            

          <a 
            href="https://www.tiktok.com/search?q=crochet%20dolls&t=1765293684798" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="footer-icons-container">

              <img src={tiktok} alt="tiktok-icon" />
            </div>
          </a>


          <a 
            href="https://www.facebook.com/TheCrochetDolls/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="footer-icons-container">

              <img src={facebook} alt='facebook-icon' />
            </div>
          </a>     


          <a 
            href="https://www.pinterest.com/search/pins/?q=crochet%20dolls&rs=typed" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="footer-icons-container">
                
              <img src={pintestericon} alt='pintester-icon' />
            </div>
          </a>

          <a 
            href="https://www.whatsapp.com/?lang=de" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="footer-icons-container">
         
              <img src={whatsapp} alt='whatsapp-icon' />
            </div>  
          </a>

        </div>

         <div className='footer-app'>
                  
          <div>
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img src={appstore} alt='app-store-icon' />         
          
            </a>
          </div>
              
          <div>
            <a 
              href="https://play.google.com/store/games?device=windows" 
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
