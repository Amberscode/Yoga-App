import { useState, useEffect } from "react";
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

  const convertTimeTo12Hr = (time) => {
    const timeArray = time.split(":");
    let ampm = "AM";
    if (timeArray[0] >= 12) {
      ampm = "PM";
    }
    if (timeArray[0] > 12) {
      timeArray[0] = timeArray[0] - 12;
    }
    const formattedTime = timeArray[0] + ":" + timeArray[1] + " " + ampm;
    return formattedTime;
  };

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  const calculateEndTime = (time, duration) => {
    const splitArray = time.split(":");
    let convertHrToMin = splitArray[0] * 60;
    console.log(convertHrToMin);
    let totalMin = parseInt(convertHrToMin) + parseInt(splitArray[1]);
    let endTimeMin = totalMin + parseInt(duration);
    let minutes = endTimeMin % 60;
    let hours = Math.floor(endTimeMin / 60);
    return `${padTo2Digits(hours)}: ${padTo2Digits(minutes)}`;
  };

  return (
    <div className="schedule-page">
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
              classStartTime={convertTimeTo12Hr(yogaClass.time)}
              classEndTime={convertTimeTo12Hr(
                calculateEndTime(yogaClass.time, yogaClass.duration)
              )}
              classTeacher={yogaClass.teacher}
              classCapacity={yogaClass.capacity}
              stylePage={`/${yogaClass.type}`}
              key={yogaClass._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
