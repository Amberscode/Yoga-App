import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Class from "../components/Class";

const Schedule = (props) => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;

  return (
    <div>
      <h1>Class Schedule</h1>;
      {props.yogaClasses.map((yogaClass) => (
        <Class
          classType={props.type}
          classTime={props.time}
          classTeacher={props.teacher}
          classCapacity={props.capacity}
          classDuration={props.duration}
          key={props.id}
        />
      ))}
    </div>
  );
};

export default Schedule;
