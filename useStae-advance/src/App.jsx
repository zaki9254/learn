import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "zaki", age: 25 });

  const btnClick = () => {
    const newNum = { ...num };

    newNum.user = "sharf";

    setNum(newNum);
  };
  return (
    <div>
      <h1>{num.user}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  );
};

export default App;
