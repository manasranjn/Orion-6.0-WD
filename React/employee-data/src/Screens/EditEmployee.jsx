import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");

  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        setName(res.data.name);
        setDesignation(res.data.designation);
        setSalary(res.data.salary);
        setExperience(res.data.experience);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      designation,
      salary,
      experience,
    };

    axios
      .put(`http://localhost:5000/employees/${id}`, updatedData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update employee. Please try again.");
      });
  };

  return (
    <div className="min-h-screen  bg-[#F0F0DB] flex justify-center items-center  px-8 md:px-12 lg:px-20 py-10">
      <div className="bg-[#ACBAC4] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-xl md:text-3xl mb-6">Edit Employee</h1>
        <form action="" className="flex flex-col gap-4 min-w-xl">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Employee Name"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <input
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            type="text"
            placeholder="Enter Employee Designation"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            placeholder="Enter Employee Salary"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="text"
            placeholder="Enter Employee Experience"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <button
            onClick={updateEmployee}
            className="rounded cursor-pointer bg-blue-500 py-2 text-white"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
