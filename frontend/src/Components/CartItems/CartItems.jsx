// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from '../Assets/cart_cross_icon.png'


// const CartItems = () => {

//     const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);

//   return (
//     <div  className='cartitems'>

//         <div className="cartitems-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>

//         </div>
//         <hr />

//         {all_product.map((e)=>{
//     if(cartItems[e.id]>0)
//     {
//         return <div>
//             <div className='cartitems-format'>
//                 <img src={e.image} alt='' className='carticon-product-icon' />
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <p className='cartitems-quantity'>{cartItems[e.id]}</p>
//                 <p>${e.new_price*cartItems[e.id]}</p>
//                 <img className='cartitems-remove-icon' src={remove_icon} onClick={() =>removeFromCart(e.id)} alt='' />
//             </div>
//             <hr/>
//         </div>
//     }
//     return  null;
// })}
// <div className="cartitems-down">
//     <div className="cartitems-total">
//         <h1>Cart Totals</h1>
    
//     <div className="cartitems-total-item">
//         <p>Subtotal</p>
//         <p>${getTotalCartAmount()}</p>
//     </div>
//     <hr/>
//     <div className="cartitems-total-items">
//         <p>Shipping Fee</p>
//         <p>Free</p>
//     </div>
//     <hr/>
//     <div className="cartitems-total-items">
//         <h3>Total</h3>
//          <h3>${getTotalCartAmount()}</h3>

//     </div>
// </div>
// <button className='cartitems-checkout-button'>Proceed to Checkout</button>
// </div>

// <div className="cartitems-promocode">
//      <p>If you have a promo code, Enter it here</p>
//      <div className="cartitems-promobox">
//         <input type="text" placeholder='Promo Code' />
//         <button className='cartitems-promocode-button'>Apply Coupon</button>
//      </div>
// </div>

//         {/* {all_product.map((e)=>{
//             if(cartItems[e.id]>0)
//             {
//                 return <div>
//         <div className='cartitems-format'>
//             <img src={e.image} alt='' className='carticon-product-icon' />
//             <p>{e.name}</p>
//              <p>${e.new_price}</p>
//              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//              <p>{e.new_price*cartItems[e.id]}</p>
//              <img src={remove_icon} onClick={() =>removeFromCart(e.id)} alt='' />
//         </div>
//         <hr/>
       
      
//     </div>
//             }
//         })} */}

//     </div>
//   )
// }

// export default CartItems

import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Coupon States
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState("");

    // Handle Coupon Submit
    const handleApplyCoupon = () => {
        if (coupon.trim() === "") {
            setCouponMessage("Please enter a coupon code.");
            return;
        }

        if (coupon === "hok") {
            setDiscount(0.20); // 20% discount
            setCouponMessage("Coupon applied! 20% discount added.");
        } 
        else if (coupon === "bsh-asd") {
            setDiscount(0);
            setCouponMessage("This coupon has expired from 8/12/2028 at 6:18 hour.");
        } 
        else {
            setDiscount(0);
            setCouponMessage("Invalid coupon code.");
        }
    };

    // Calculate totals
    const subtotal = getTotalCartAmount();
    const discountAmount = subtotal * discount;
    const finalTotal = subtotal - discountAmount;

    return (
        <div className='cartitems'>

            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <p className='cartitems-quantity'>{cartItems[e.id]}</p>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt=''
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>

                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>

                    <hr />

                    {discount > 0 && (
                        <>
                            <div className='cartitems-total-item'>
                                <p>Discount (20%)</p>
                                <p>- ${discountAmount.toFixed(2)}</p>
                            </div>
                            <hr />
                        </>
                    )}

                    <div className="cartitems-total-items">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>

                    <hr />

                    <div className="cartitems-total-items">
                        <h3>Total</h3>
                        <h3>${finalTotal.toFixed(2)}</h3>
                    </div>

                </div>

                <button className='cartitems-checkout-button'>Proceed to Checkout</button>
            </div>

            {/* Coupon Section */}
            <div className="cartitems-promocode">
                <p>If you have a promo code, enter it here</p>

                <div className="cartitems-promobox">
                    <input
                        type="text"
                        placeholder="Promo Code"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                    />

                    <button className='cartitems-promocode-button' onClick={handleApplyCoupon}>
                        Apply Coupon
                    </button>
                </div>

                {couponMessage && (
                    <p style={{
                        color: discount > 0 ? "green" : "red",
                        marginTop: "8px",
                        fontWeight: 600
                    }}>
                        {couponMessage}
                    </p>
                )}
            </div>

        </div>
    )
}

export default CartItems;
