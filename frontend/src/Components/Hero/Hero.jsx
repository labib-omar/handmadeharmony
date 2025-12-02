import React from 'react'
import './Hero.css'
import handicon from '../Assets/hand_icon.png'
import arrowicon from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'
import homePic from '../Assets/Project Pic/Home page/ice-cream-crochet-for-home-page.jpg'


 

function Hero() {
  return (
    <div className="hero">

         <div className="hero-left">
            <h2>
              Explore a handmade world where little details mean everything in
            </h2>

            <h1>H.H</h1>
            <h1>Handmade Harmony</h1>

            <div>
                <div className="hero-hand-icon">
                    <p></p>
                    
                     <p>👋</p>
                </div>

                <p>
                  Where every thread tells a story. 
                  Explore our world of handmade crochet dolls,decorative lamps, and custom gifts, 
                  all crafted with love.
                </p>
           
            </div>

            <div className="hero-latest-btn">
                <div>SHOP THE MAGIC</div>
                <img src={arrowicon} alt='' />
            </div>

         </div>

         <div className="hero-right">
         </div>


        </div>
      
    
  )
}

export default Hero
