import React, { useState, useEffect } from "react";

const APIData = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    setData(data);
    console.log(count);
    // setCount(count + 1);
  };

  // getData();

  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div>
      <h1>API Data</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <div className="grid grid-cols-3 gap-5">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-600 rounded p-4">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default APIData;
