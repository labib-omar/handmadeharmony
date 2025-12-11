import React from "react";
import AllProducts from "../Components/AllProducts/AllProducts";
import NewCollection from "../Components/NewCollections/NewCollection";
import Offers from "../Components/Offers/Offers";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Css/Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <Navbar />
      <NewCollection />
      <Offers />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default Shop;
