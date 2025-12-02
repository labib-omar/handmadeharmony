import React from 'react'
import './Popular.css'
import { products } from "../Assets/data"
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR FOR YOU </h1>
        <hr />
        <div className="popular-item"> 
            {products.map(item => (
  <div key={item.id}>
    <img src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p><s>${item.oldPrice}$</s>${item.newPrice}$</p>
  </div>
))}

        </div>
      
    </div>
  )
}

export default Popular
