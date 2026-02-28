import LeftContent from "src/components/Section1/LeftContent";
import RightContent from "src/components/Section1/RightContent";

const Page1Content = (props) => {
  console.log(props);
  return (
    <div className="pb-16 pt-6 flex gap-10 items-center h-[90vh]  px-18">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
