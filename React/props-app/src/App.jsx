import React from "react";
import ProductCard from "./Components/ProductCard";
import AccedemicDetails from "./Components/AccedemicDetails";

function App() {
  const personalData = {
    name: "Smith",
    age: 20,
    address: "NY",
  };

  const courseData = {
    stream: "Full Stack",
    duration: "3 Months",
  };

  return (
    <div className="app">
      {/* <ProductCard name="Product 1" description="Product 1 description" />
      <ProductCard name="Product 2" description="Product 2 description" />
      <ProductCard price={200} />
      <ProductCard reviews={[1, 2, 3, 4, 5, 6]} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}

      <AccedemicDetails personalData={personalData} courseData={courseData} />
    </div>
  );
}

export default App;
