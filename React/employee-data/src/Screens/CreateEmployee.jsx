import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");

  const [alert, setAlert] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !designation || !salary || !experience) {
      setAlert("Please fill all the fields");
      setSuccess("");
      return;
    }

    const data = {
      name,
      designation,
      salary,
      experience,
    };

    // console.log(data);

    axios
      .post("http://localhost:5000/employees", data)
      .then((res) => {
        console.log("Employee Created", res);
        setSuccess("Employee created successfully");
        setAlert("");
        setName("");
        setDesignation("");
        setSalary("");
        setExperience("");

        navigate("/");
      })
      .catch((err) => {
        console.log("Error creating employee", err);
        setAlert("Error creating employee");
        setSuccess("");
      });
  };

  return (
    <div className="min-h-screen  bg-[#F0F0DB] flex justify-center items-center  px-8 md:px-12 lg:px-20 py-10">
      <div className="bg-[#ACBAC4] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-xl md:text-3xl mb-6">
          Create Employee
        </h1>

        {alert && (
          <p className="text-red-500 text-lg text-center mb-4">{alert}</p>
        )}

        {success && (
          <p className="text-green-500 text-lg text-center mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-xl">
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
            // onClick={handleSubmit}
            className="rounded cursor-pointer outline-none border-none bg-blue-500 py-2 text-white"
          >
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
