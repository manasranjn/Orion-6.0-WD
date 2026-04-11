import React from "react";

// const ProductCard = (props) => {
const ProductCard = ({ name, description }) => {
  // console.log(props);

  // const { name, description } = props;

  console.log(name, description);

  //! Destructuring
  // let arr = [1, 2, 3, 4, 5];
  // let [a, b, c, d, e] = arr;

  // console.log(a, b, c, d, e);

  const obj = {
    name: "Manas",
    age: 20,
    address: "NY",
  };

  // const { name, age, address } = obj;

  // console.log(name, age, address);

  let a = 10;

  return (
    <div className="card">
      {/* <p>{a}</p> */}
      {/* <h1>Product Name: {props.name}</h1> */}
      <h1>Product Name: {name}</h1>
      {/* <p>Description: {props.description}</p> */}
      <p>Description: {description}</p>
    </div>
  );
};

export default ProductCard;
