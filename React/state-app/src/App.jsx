import React from "react";
import Counter from "./Components/Counter";
import Example from "./Components/Example";
import "./global.css";

const App = () => {
  return (
    <div className="bg-amber-200 p-10 m-5 rounded">
      <h1 className="text-3xl font-black text-green-600">This is heading</h1>
      <p>This is a paragraph</p>
      <Counter />
      <Example />
    </div>
  );
};

export default App;
