import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import CreateEmployee from "../Screens/CreateEmployee";
import EditEmployee from "../Screens/EditEmployee";
import EmployeeDetails from "../Screens/EmployeeDetails";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/edit" element={<EditEmployee />} />
          <Route path="/details" element={<EmployeeDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
