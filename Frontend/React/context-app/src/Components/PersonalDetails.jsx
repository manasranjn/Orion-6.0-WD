import React, { useContext } from "react";
import { contextVariable } from "../App";

const PersonalDetails = () => {
  const data = useContext(contextVariable);
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
      <h1>Course: {data.course}</h1>
    </div>
  );
};

export default PersonalDetails;
