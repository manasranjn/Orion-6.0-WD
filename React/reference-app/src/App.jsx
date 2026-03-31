import React from "react";
import Reference from "./components/Reference";
import UnControlled from "./components/UnControlled";
import Controlled from "./components/Controlled";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <Reference /> */}
      {/* <UnControlled /> */}
      <Controlled />
    </div>
  );
};

export default App;
