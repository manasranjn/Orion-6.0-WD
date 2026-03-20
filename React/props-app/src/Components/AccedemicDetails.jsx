import React from "react";
import AllStudents from "./AllStudents";

const AccedemicDetails = (prop) => {
  // console.log(prop);

  return (
    <div>
      AccedemicDetails
      <AllStudents
        personalData={prop.personalData}
        courseData={prop.courseData}
      />
    </div>
  );
};

export default AccedemicDetails;
