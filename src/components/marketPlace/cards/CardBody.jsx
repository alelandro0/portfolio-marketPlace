import React from "react";
import Card from "./Card";
import "./CardBody.css";
const CardBody = ({ products, addItem,addedItems }) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="card__body">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardBody;
