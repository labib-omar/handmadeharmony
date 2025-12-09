import React from 'react'
import './Offers.css'
import exclusiveimage from '../Assets/making-hearts-with-crochet-for-about-page.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
      </div>
        
      <div className="offers-right">
        {/* <img src={exclusiveimage} alt='' /> */}
        <h1>Special Edition</h1>
        <h2>Your Vision  is Our Handmade Touch</h2>
        <p>Tell us your idea, We’ll turn it into reality.</p> 
        <span>For fully customized piece, simply send us an email with your idea, including any photos, colors, sizes, or special details you want. The more information you share, the closer we can bring your vision to life! 
          <br /> We’ll review your request and get back to you with pricing, timing, and available options.
        </span>     
 
        <button>
         <a
          href={`mailto:contact@hh-handmade.com?subject=Custom Order Request&body=
          Dear H.H Customer Service,%0D%0A%0D%0A
          I would like to request a custom handmade piece. Here are the details:%0D%0A%0D%0A
          Description of the idea:%0D%0A[Write here]%0D%0A%0D%0A
          Preferred colors:%0D%0A[Write here]%0D%0A%0D%0A
          Size or measurements:%0D%0A[Write here]%0D%0A%0D%0A
          Material preference:%0D%0A[Write here]%0D%0A%0D%0A
          Reference photos attached:%0D%0AYes / No%0D%0A%0D%0A
          Additional notes:%0D%0A[Write here]%0D%0A%0D%0A
          Thank you,%0D%0A
          [Your Name]%0D%0A
          [Your Email]`}
          >
            Contact us Now
          </a>

        </button>

      </div>
    </div>
  )
}

export default Offers
