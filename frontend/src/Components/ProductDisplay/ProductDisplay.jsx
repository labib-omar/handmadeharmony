import React, { useContext } from 'react'
import './ProductDisplay.css';
import staricon from '../Assets/star_icon.png';
import stardullicon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay' >
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              
                  <img src={product.image2} alt='' />
                    <img src={product.image3} alt='' />
                      <img src={product.image4} alt='' />
                        
            </div>
            <div className="productdisplay-img">
                  <img className='productdisplay-main-img' src={product.image} alt='' />

            </div>

        </div>
        
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={staricon} alt='' />
            <img src={staricon} alt='' />
            <img src={staricon} alt='' />
            <img src={staricon} alt='' />
            <img src={stardullicon} alt='' />
            <p>(28)</p>
            </div>
          
            <div className="productdisplay-right-description">
                {product.short_description}
            </div>
  <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
             
             <button onClick={()=>{addToCart(product.id)}}>
              ADD TO CART
            </button>
            </div>
           


      </div>
    </div>
  )
}

export default ProductDisplay;

