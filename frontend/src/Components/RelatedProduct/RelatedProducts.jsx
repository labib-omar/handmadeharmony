import React from 'react'
import './RelatedProducts.css'
// import { products } from "../Assets/data";
import Item from '../Items/Item';


const RelatedProduct = () => {
  const [all_product, setAll_product] = React.useState([]);      
      React.useEffect(() => {
          fetch("http://localhost:4000/allproducts")
          .then((response)=>response.json())
          .then((data)=>setAll_product(data))
      },[])
  return (
    <div className='relatedproducts'>
      <hr className='dividing-bar'/>
      <h1>Related Products</h1>
      <hr className='hr-Related'/>
      <div className="relatedproducts-item">
        {all_product.map((item,i)=>{

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


