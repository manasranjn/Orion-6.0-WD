import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const [error, setError] = useState("");

  const params = useParams().id;
  // console.log(params);

  const getEmployee = () => {
    axios
      .get(`http://localhost:5000/employees/${params}`)
      .then((res) => {
        setEmployee(res.data);
        // console.log(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong while fetching employee details.");
      });
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div className="min-h-screen  bg-[#F0F0DB] flex flex-col justify-center items-center px-8 md:px-12 lg:px-20 py-10">
      {error && <p className="text-red-500 text-xl">{error}</p>}

      {!error && (
        <div className="bg-[#ACBAC4] rounded-lg shadow-lg p-8 w-full flex flex-col gap-3 max-w-xl">
          <h3 className="text-xl ">Name: {employee.name}</h3>
          <h3 className="text-xl ">Designation: {employee.designation}</h3>
          <h3 className="text-xl ">Salary: {employee.salary}</h3>
          <h3 className="text-xl ">Experience: {employee.experience}</h3>

          <Link
            to={`/edit/${employee.id}`}
            className="text-center rounded cursor-pointer bg-blue-500 py-2 text-white"
          >
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
