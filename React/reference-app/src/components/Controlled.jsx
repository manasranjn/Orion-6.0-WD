import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   name: name,
    //   email: email,
    //   password: password,
    // };

    const data = {
      name,
      email, // email: "Hello World"
      password,
    };

    console.log(data);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-green-200 rounded-lg p-6 shadow-md min-w-xl">
      <h1 className="text-2xl text-center">Controlled Form Handling</h1>

      <form className="bg-slate-500 flex flex-col gap-4 p-5 rounded mt-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="px-3 py-2 rounded text-lg bg-white outline-none border-none"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 rounded text-lg bg-white outline-none border-none"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="px-3 py-2 rounded text-lg bg-white outline-none border-none"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="px-3 py-2 rounded text-lg bg-green-600 cursor-pointer text-white outline-none border-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Controlled;
