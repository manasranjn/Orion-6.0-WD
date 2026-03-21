import React from "react";
import style from "./example.module.css";

const Example = () => {
  return (
    <div>
      <h1 id={style.heading}>Example</h1>
      <p className="para">This is a paragraph</p>
      <p className={style.para2}>This is another paragraph</p>
    </div>
  );
};

export default Example;
