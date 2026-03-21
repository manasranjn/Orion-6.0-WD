import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const butonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "1px solid white",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "300px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "45px" }}>Count: {count}</h1>

      <div>
        <button style={butonStyle} onClick={increment}>
          Increment
        </button>
        <button style={butonStyle} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button style={butonStyle} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
