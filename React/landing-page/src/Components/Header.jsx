import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="px-12 lg:px-20 py-2 bg-black text-white hidden md:flex justify-between items-center">
      <div className="flex gap-3 items-center text-sm">
        <a
          className="flex gap-2 items-center"
          href="mailto:example@example.com"
        >
          <MdEmail size={15} />
          example@example.com
        </a>
        <p className="flex gap-2 items-center">
          <FaLocationDot /> Bhubaneswar, Odisha
        </p>
      </div>

      <div className="flex gap-3 items-center text-green-700 text-xl">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.github.com/">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Header;
