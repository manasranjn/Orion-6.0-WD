import React from "react";

const CreateEmployee = () => {
  return (
    <div className="min-h-screen  bg-[#F0F0DB] flex justify-center items-center  px-8 md:px-12 lg:px-20 py-10">
      <div className="bg-[#ACBAC4] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-xl md:text-3xl mb-6">
          Create Employee
        </h1>
        <form action="" className="flex flex-col gap-4 min-w-xl">
          <input
            type="text"
            placeholder="Enter Employee Name"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <input
            type="text"
            placeholder="Enter Employee Designation"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <input
            type="text"
            placeholder="Enter Employee Salary"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <input
            type="text"
            placeholder="Enter Employee Experience"
            className="p-2 rounded border-none outline-none bg-white text-lg"
          />
          <button className="rounded cursor-pointer bg-blue-500 py-2 text-white">
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
