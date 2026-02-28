import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const btnClick = () => {
    setNum(num + 10);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  );
};

export default App;
