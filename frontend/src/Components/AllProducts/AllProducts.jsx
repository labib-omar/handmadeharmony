import React from 'react';
import './AllProducts.css';
import Item from '../Items/Item';

const Popular = () => {
  const [all_product, setAll_product] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_product(data));
  }, []);

  return (
    <div className="popular">
      <h1>ALL PRODUCTS</h1>
      <hr />

      <div className="popular-item">
        {all_product.map((product) => (
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
};

export default Popular;
