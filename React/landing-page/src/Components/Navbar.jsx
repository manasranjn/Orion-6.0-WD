import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="px-8 md:px-12 lg:px-20 py-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-xl md:text-3xl text-green-700 font-bold">Logo</h1>
      </div>

      <ul className="hidden md:flex gap-6">
        <li className="hover:text-green-700 hover:font-semibold hover:underline">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-green-700 hover:font-semibold hover:underline">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-green-700 hover:font-semibold hover:underline">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-green-700 hover:font-semibold hover:underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="hidden md:flex gap-4">
        <button className="rounded outline-none border-none bg-green-700 font-semibold cursor-pointer w-26 py-2 text-white">
          Login
        </button>
        <button className="rounded outline-none border-none bg-blue-700 font-semibold cursor-pointer w-26 py-2 text-white">
          Signup
        </button>
      </div>

      <div className="md:hidden">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
