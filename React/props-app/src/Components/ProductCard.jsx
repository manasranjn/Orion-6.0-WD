import React from "react";

const ProductCard = (props) => {
  console.log(props);

  let a = 10;

  return (
    <div className="card">
      <p>{a}</p>
      <h1>Product Name: {props.name}</h1>
      <p>Description: {props.description}</p>
    </div>
  );
};

export default ProductCard;
