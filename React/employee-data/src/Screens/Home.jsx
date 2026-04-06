import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const getAllData = () => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        console.log(res.data);
        setEmployeeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="min-h-screen  bg-[#F0F0DB] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-5 px-8 md:px-12 lg:px-20 py-10">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
};

export default Home;

const EmployeeCard = () => {
  return (
    <div className="bg-[#ACBAC4] p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-3 text-lg md:text-xl ">
      <h3>Name: </h3>
      <h3>Designation: </h3>
      <h3>Salary: </h3>
      <h3>Experience: </h3>

      <div className="flex justify-between items-center ">
        <button className="rounded cursor-pointer w-26 bg-blue-500 py-2 text-white">
          Details
        </button>
        <button className="rounded cursor-pointer w-26 bg-red-500 py-2 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};
