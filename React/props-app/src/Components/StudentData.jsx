import React from "react";
import PersonalDetails from "./PersonalDetails";
import CourseDetails from "./CourseDetails";

const StudentData = (x) => {
  // console.log(x);
  return (
    <div>
      StudentData
      <PersonalDetails personalData={x.personalData} />
      <CourseDetails courseData={x.courseData} />
    </div>
  );
};

export default StudentData;
