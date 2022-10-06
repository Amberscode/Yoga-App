import { useContext, useState, useEffect } from "react";
import AuthContext from "../store/auth-context";
import Class from "../components/Class";
import axios from "axios";

const Schedule = (props) => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  const [yogaClasses, setYogaClasses] = useState([]);

  async function callBackend() {
    console.log("getting data");
    let request = await axios.get("http://localhost:80/classes");
    if (request.data.success === true) {
      setYogaClasses(request.data.classes);
      console.log(request.data.classes);
    } else {
      console.log("something went wrong");
    }
  }
  useEffect(() => {
    callBackend();
  }, []);

  return (
    <div>
      <h1>Class Schedule</h1>
      {yogaClasses.map((yogaClass) => (
        <Class
          classType={yogaClass.type}
          classDate={yogaClass.date}
          classTime={yogaClass.time}
          classTeacher={yogaClass.teacher}
          classCapacity={yogaClass.capacity}
          classDuration={yogaClass.duration}
          key={yogaClass._id}
        />
      ))}
      {loggedIn ? <button>Register</button> : <p>Please sign in to register</p>}
    </div>
  );
};

export default Schedule;
