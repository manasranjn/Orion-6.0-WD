import React from "react";

const List = () => {
  const products = [
    { id: 1, name: "Mobile", price: 10000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Tablet", price: 20000 },
    { id: 4, name: "Camera", price: 30000 },
    { id: 5, name: "Watch", price: 5000 },
  ];

  return (
    <div className="min-h-screen bg-gray-400 p-10">
      <h1 className="text-center text-4xl font-semibold">List of items</h1>
      {/* <div className="grid grid-cols-3 gap-5 mt-10">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-green-800 text-white p-5 rounded-lg"
            >
              <h1>Name: {item.name}</h1>
              <p>Price: ${item.price}</p>
            </div>
          );
        })}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {products.map((item, idx) => (
          <div key={idx} className="bg-green-800 text-white p-5 rounded-lg">
            <h1>Name: {item.name}</h1>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
