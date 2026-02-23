import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://i.pinimg.com/736x/df/59/c5/df59c524ef3fb15e12ad841d2b97cbcd.jpg",
      intro: "",
      color: "blue",
      tag: "underserved",
    },
    {
      img: "https://i.pinimg.com/736x/86/63/34/8663348ab0b3e55b048a19585759e85d.jpg",
      intro: "",
      color: "lightgreen",
      tag: "Satisfied",
    },
    {
      img: "https://i.pinimg.com/1200x/01/29/30/01293041bd2337ea0432d81157d1dd0f.jpg",
      intro: "",
      color: "pink",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
