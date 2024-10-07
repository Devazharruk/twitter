import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setdata] = useState({});
  const fetchapi = async () => {
    const response = await axios.get("https://twitterbackend-eight.vercel.app/welcome");
    console.log(response.data);
    setdata(response.data);
  };
  return (
    <div>
      <button onClick={fetchapi}>clck</button>
      {data && <h1>{data.message}</h1>}
    </div>
  );
};

export default App;
