import React from "react";
import bird from "../assets/bird.jpg";
import picture1 from "../assets/image1.jpg";

import images from "../assets/assets";

const Help = () => {
  return (
    <div>
      <img src={bird} alt="" width={300} />
      <img src={picture1} alt="" width={300} />

      <img src={images.image1} alt="" />
    </div>
  );
};

export default Help;
