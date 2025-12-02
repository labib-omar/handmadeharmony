import React from 'react'
import './NewCollection.css'
import new_collections from '../Assets/new_collections'
import Item from '../Items/Item';


const NewCollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
            {/* <div className="collections">



              {new_collections.map(item => (
    <div key={item.id}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p><s>${item.oldPrice}$</s>${item.newPrice}$</p>
    </div>
  ))}
  
          </div> */}
          
<div className="collections">
  {new_collections.map(product => (
    <Item
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
        old_price={product.old_price}
            new_price={product.new_price}
    />
  ))}
</div>
</div>
      
    
  )
}

export default NewCollection
