import React from "react";
import CartItems from "../Components/CartItems/CartItems";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Css/Cart.css";

const Cart = () => {
  return (
    <div className="Cart-page">
      <Navbar />
      <CartItems />
      <Footer />
    </div>
  );
};

export default Cart;
