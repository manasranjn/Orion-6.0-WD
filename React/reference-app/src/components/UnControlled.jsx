import React, { useRef } from "react";

const UnControlled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="bg-green-200 rounded-lg p-6 shadow-md min-w-xl">
      <h1 className="text-2xl text-center">Un-Controlled Form Handling</h1>

      <form className="bg-slate-500 flex flex-col gap-4 p-5 rounded mt-5">
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter your name"
          className="px-3 py-2 rounded text-lg bg-white outline-none border-none"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 rounded text-lg bg-white outline-none border-none"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          className="px-3 py-2 rounded text-lg bg-white outline-none border-none"
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="px-3 py-2 rounded text-lg bg-green-600 cursor-pointer text-white outline-none border-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UnControlled;
