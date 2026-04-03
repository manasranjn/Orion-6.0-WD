import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-8 md:px-12 lg:px-20 py-3 bg-[#30364F] text-white flex justify-between items-center">
      <Link to="/">
        <h2 className="text-lg md:text-2xl">WebBocket</h2>
      </Link>

      <Link to="/" className="hover:underline">
        Home
      </Link>

      <Link to="/create">
        <button className="px-8 py-2 rounded-md bg-green-500 cursor-pointer">
          Create Employee
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
