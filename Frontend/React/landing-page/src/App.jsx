import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Services from "./Screens/Services";
import Login from "./Screens/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
