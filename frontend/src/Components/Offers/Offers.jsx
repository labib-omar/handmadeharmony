import React from 'react'
import './Offers.css'
import exclusiveimage from '../Assets/exclusive-image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Execlusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>


        </div>
      <div className="offers-right">
        <img src={exclusiveimage} alt='' />



      </div>
    </div>
  )
}

export default Offers
