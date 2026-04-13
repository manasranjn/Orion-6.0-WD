import React from "react";
import StudentData from "./StudentData";

const AllStudents = (data) => {
  // console.log(data);

  return (
    <div>
      AllStudents
      <StudentData
        personalData={data.personalData}
        courseData={data.courseData}
      />
    </div>
  );
};

export default AllStudents;
