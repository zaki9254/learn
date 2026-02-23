import Navbar from "src/components/Section1/Navbar";
import Page1Content from "src/components/Section1/Page1Content";

const Section1 = (props) => {
  console.log(props.users);
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
};

export default Section1;
