import React from 'react'
import  './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Execlusive On Your Email</h1>
        <p>Subscribe ro our newsletter and stay updated </p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
