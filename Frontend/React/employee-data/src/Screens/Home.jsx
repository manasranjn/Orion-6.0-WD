import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const getAllData = () => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        console.log(res.data);
        setEmployeeData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllData();
  };

  return (
    <div className="relative">
      <div className="min-h-screen  bg-[#F0F0DB] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-5 px-8 md:px-12 lg:px-20 py-10">
        {employeeData?.map((item) => (
          <EmployeeCard
            key={item.id}
            name={item.name}
            designation={item.designation}
            salary={item.salary}
            experience={item.experience}
            id={item.id}
            setDeleteId={setDeleteId}
          />
        ))}
      </div>

      {deleteId && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center">
          <div className="w-sm h-40 bg-slate-300 p-4 rounded-lg flex flex-col justify-center gap-4">
            <p className="text-lg text-center">Do you want to delete ?</p>

            <div className="flex justify-between items-center">
              <button
                onClick={() => handleDelete(deleteId)}
                className="w-24 py-2 bg-red-500 rounded cursor-pointer border-none text-white"
              >
                Yes
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="w-24 py-2 bg-green-500 rounded cursor-pointer border-none text-white"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

const EmployeeCard = ({
  name,
  designation,
  salary,
  experience,
  id,
  setDeleteId,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ACBAC4] p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-3 text-lg md:text-xl ">
      <h3>Name: {name}</h3>
      <h3>Designation: {designation}</h3>
      <h3>Salary: {salary}</h3>
      <h3>Experience: {experience}</h3>

      <div className="flex justify-between items-center ">
        <button
          onClick={() => navigate(`/details/${id}`)}
          className="rounded cursor-pointer w-26 bg-blue-500 py-2 text-white"
        >
          Details
        </button>
        <button
          onClick={() => {
            setDeleteId(id);
          }}
          className="rounded cursor-pointer w-26 bg-red-500 py-2 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
