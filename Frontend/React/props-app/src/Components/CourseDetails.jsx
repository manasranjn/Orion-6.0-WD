import React from "react";

const CourseDetails = (props) => {
  return (
    <div>
      CourseDetails
      <h1>Name: {props.courseData.stream}</h1>
      <h2>Duration: {props.courseData.duration}</h2>
    </div>
  );
};

export default CourseDetails;
