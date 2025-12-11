import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link
        to={`/product/${id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={image} alt={name} />
      </Link>

      <p>{name}</p>

      <div className="item-prices">
        <div className="item-price-new">{new_price}$</div>
        <div className="item-price-old">{old_price}$</div>
      </div>
    </div>
  );
};

export default Item;
