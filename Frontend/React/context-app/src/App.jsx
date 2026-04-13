import React, { createContext } from "react";
import AccedemicDetails from "./Components/AccedemicDetails";

export const contextVariable = createContext();

const App = () => {
  return (
    <div>
      <contextVariable.Provider
        value={{ name: "John Doe", age: 25, course: "Computer Science" }}
      >
        <AccedemicDetails />
      </contextVariable.Provider>
    </div>
  );
};

export default App;
