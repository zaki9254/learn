import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users.color);
  return (
    <div
      id="right"
      className=" flex rounded-4xl overflow-x-auto flex-nowrap gap-10 h-full p-6 w-2/3 "
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
