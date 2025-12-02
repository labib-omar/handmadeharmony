import React from 'react'
import './RelatedProducts.css'
import { products } from "../Assets/data";
import Item from '../Items/Item';


const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {products.map((item,i)=>{

          return <Item
    key={item.id}
    id={item.id}
    name={item.name}
    image={item.image}
    old_price={item.old_price}
    new_price={item.new_price}
    />

        })}

      </div>
      
    </div>
  )
}

export default RelatedProduct


