import React from 'react'
import './NewCollection.css'
import new_collections from '../Assets/new_collections'


const NewCollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
            <div className="collections">



              {new_collections.map(item => (
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

export default NewCollection
