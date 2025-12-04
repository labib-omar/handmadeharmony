import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import Navbar from '../Components/Navbar/Navbar'  
import Footer from '../Components/Footer/Footer'


const Cart = () => {
  return (
    <div>
      <Navbar />  
    <div>
       <CartItems />
    </div>
    <Footer />
    </div>
  )
}

export default Cart
