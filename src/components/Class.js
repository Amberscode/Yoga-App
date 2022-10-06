import "../styles/Class.css";

const Class = (props) => {
  return (
    <div className="yoga-class">
      <h4 className="class-type">{props.classType}</h4>
      <p>Time: {props.classTime}</p>
      <p>Teacher: {props.classTeacher}</p>
    </div>
  );
};

export default Class;
