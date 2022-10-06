import { useState, useEffect, Fragment } from "react";
import Class from "../components/Class";
import axios from "axios";
import "../styles/Schedule.css";

const Schedule = () => {
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
    <Fragment>
      <div className="container-fluid schedule-page-header ">
        <div className="row">
          <div className="col-md-8 mx-auto align-middle">
            <h1 className="schedule-h1 display-3">Class Schedule</h1>
          </div>
        </div>
      </div>
      <div className="row schedule-page-content">
        {yogaClasses.map((yogaClass) => (
          <div className="yoga-class">
            <Class
              classType={yogaClass.type}
              classDate={yogaClass.date}
              classTime={yogaClass.time}
              classTeacher={yogaClass.teacher}
              classCapacity={yogaClass.capacity}
              classDuration={yogaClass.duration}
              stylePage={`/${yogaClass.type}`}
              key={yogaClass._id}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Schedule;
