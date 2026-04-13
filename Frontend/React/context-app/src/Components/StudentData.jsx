import React, { useContext } from "react";
import PersonalDetails from "./PersonalDetails";
import { contextVariable } from "../App";

const StudentData = () => {
  const data = useContext(contextVariable);
  // console.log(data);

  return (
    <div>
      <PersonalDetails />
    </div>
  );
};

export default StudentData;
