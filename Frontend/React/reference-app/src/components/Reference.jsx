import React, { useRef } from "react";

const Reference = () => {
  const headingRef = useRef();
  const paragraph = useRef();

  //   console.log(headingRef);

  return (
    <div>
      <h1 ref={headingRef}>Reference App</h1>
      <p ref={paragraph}>This is a reference app</p>
      <button
        onClick={() => {
          console.log(headingRef);
          console.log(headingRef.current);
          headingRef.current.style.color = "red";
          paragraph.current.style.color = "blue";
          headingRef.current.innerText = "Heading Changed";
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default Reference;
