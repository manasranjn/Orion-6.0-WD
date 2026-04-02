import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-8 md:px-12 lg:px-20 py-4 shadow-md">
      {/*Navbar for Large Screen */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-3xl text-green-700 font-bold">Logo</h1>
        </div>

        <ul className="hidden md:flex gap-6">
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="rounded outline-none border-none bg-green-700 font-semibold cursor-pointer w-26 py-2 text-white">
              Login
            </button>
          </Link>
          <button className="rounded outline-none border-none bg-blue-700 font-semibold cursor-pointer w-26 py-2 text-white">
            Signup
          </button>
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Navbar for Small Screen */}

      <div
        className={`md:hidden h-screen w-full absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"} bg-red-400 px-4 py-10`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end">
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-4 py-4">
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="hover:text-green-700 hover:font-semibold hover:underline">
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex  justify-center gap-4">
          <button className="rounded outline-none border-none bg-green-700 font-semibold cursor-pointer w-26 py-2 text-white">
            Login
          </button>
          <button className="rounded outline-none border-none bg-blue-700 font-semibold cursor-pointer w-26 py-2 text-white">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
