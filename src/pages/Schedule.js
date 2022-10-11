import { useState, useEffect } from "react";
import Class from "../components/Class";
import axios from "axios";
import "../styles/Schedule.css";
import moment from "moment";

const Schedule = () => {
  const [yogaClasses, setYogaClasses] = useState([]);

  const [firstDay, setFirstDay] = useState(0);
  const [lastDay, setLastDay] = useState(7);
  let daysArray = [];

  const addDays = () => {
    setFirstDay(() => firstDay + 7);
    setLastDay(() => lastDay + 7);
  };

  const subtractDays = () => {
    setFirstDay(() => firstDay - 7);
    setLastDay(() => lastDay - 7);
  };

  for (let i = firstDay; i < lastDay; i++) {
    daysArray.push(moment().add(i, "days").toDate());
  }
  console.log(daysArray);

  async function callBackend() {
    let timestampToday = moment().startOf("day").unix();
    let end = 7;

    let request = await axios.get(
      `http://localhost:80/classes?start=${timestampToday}&days=${end}`
    );
    if (request.data.success === true) {
      console.log(new Date(request.data.classes[0].date));
      setYogaClasses(request.data.classes);
    } else {
      console.log("something went wrong");
    }
  }
  useEffect(() => {
    callBackend();
  }, []);

  const convertTimeTo12Hr = (time) => {
    const timeArray = time.split(":");
    let ampm = "am";
    if (timeArray[0] >= 12) {
      ampm = "pm";
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
          <div className="yoga-class" key={yogaClass._id}>
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
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          {daysArray.map((day) => (
            <p className="date-header" key={day}>
              {day.toDateString()}
            </p>
          ))}
        </div>
        <button onClick={subtractDays}>Previous Week</button>{" "}
        <button onClick={addDays}>Next Week</button>
      </div>
    </div>
  );
};

export default Schedule;
