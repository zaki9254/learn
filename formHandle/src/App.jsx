import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault;
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" name="" id="" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
