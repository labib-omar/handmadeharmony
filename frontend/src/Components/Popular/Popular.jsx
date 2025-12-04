// import React from 'react'
// import './Popular.css'
// import { products } from "../Assets/data"
// const Popular = () => {
//   return (
//     <div className='popular'>
//         <h1>POPULAR FOR YOU </h1>
//         <hr />
//         <div className="popular-item"> 
//             {products.map(item => (
//   <div key={item.id}>
//     <img src={item.image} alt={item.name} />
//     <h3>{item.name}</h3>
//     <p><s>${item.oldPrice}$</s>${item.newPrice}$</p>
//   </div>
// ))}

//         </div>
      
//     </div>
//   )
// }

// export default Popular



import React from 'react';
import './Popular.css';
// import { products } from "../Assets/data";

import Item from '../Items/Item' 
import all_product from '../Assets/all_product';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR FOR YOU</h1>
      <hr />
      <div className="popular-item">
        {all_product.map(product => (
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
  );
}

export default Popular;
