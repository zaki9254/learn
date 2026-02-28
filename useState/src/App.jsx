import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }
  function deccreaseNum() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>value of num is {num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={deccreaseNum}>Decrease</button>
    </div>
  );
};

export default App;
