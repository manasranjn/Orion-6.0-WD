import React from "react";

const PersonalDetails = (props) => {
  console.log(props.personalData);

  return (
    <div>
      PersonalDetails
      <h1>Name: {props.personalData.name}</h1>
      <h2>Age: {props.personalData.age}</h2>
      <h3>Address: {props.personalData.address}</h3>
    </div>
  );
};

export default PersonalDetails;
