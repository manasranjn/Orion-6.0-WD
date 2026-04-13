import React from "react";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ClassBase from "./Components/ClassBase";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello, this is my first project</h1>
      <Hero />
      <Hero></Hero>
      <Footer />
      <ClassBase />
    </div>
  );
};

export default App;
