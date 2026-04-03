import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-[#30364F] text-white text-center py-3">
      <div className="container mx-auto px-4">
        <p>&copy; {date} WebBocket. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
