import React from 'react';
import './NewCollection.css';
import Item from '../Items/Item';

const NewCollection = () => {
  const [new_collections, setNew_Collection] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_Collection(data));
  }, []);

  return (
    <div className="new-collections">
      
      <h1>NEW DESIGNS</h1>
      
      <hr />

      <div className="collections">
        {new_collections.map((product) => (
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

export default NewCollection;
