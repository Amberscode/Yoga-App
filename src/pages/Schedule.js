import { useState, useEffect } from "react";
import Class from "../components/Class";
import axios from "axios";
import "../styles/Schedule.css";
import moment from "moment";

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [yogaClasses, setYogaClasses] = useState([]);

  const [firstDay, setFirstDay] = useState(0);
  const [lastDay, setLastDay] = useState(7);
  const [offset, setOffset] = useState(0);
  let daysArray = [];
  let dailyYogaClasses = [];
  let currentTime = moment().unix();

  console.log(currentTime);

  const addDays = (event) => {
    setFirstDay(() => firstDay + 7);
    setLastDay(() => lastDay + 7);
    setOffset(() => offset + 7);

    callBackend(offset + 7);
    event.target.blur();
  };

  const subtractDays = (event) => {
    setFirstDay(() => firstDay - 7);
    setLastDay(() => lastDay - 7);
    setOffset(() => offset - 7);

    callBackend(offset - 7);
    event.target.blur();
  };

  const registerHandler = (event) => {
    event.target.blur();
  };

  const editClassHandler = (event) => {
    event.target.blur();
  };

  const deleteClassHandler = (event) => {
    event.target.blur();
  };

  for (let i = firstDay; i < lastDay; i++) {
    daysArray.push(moment().add(i, "days").startOf("day").toDate()); // create native javascript object
  }

  async function callBackend(offsetParameter) {
    setIsLoading(true);
    let timeStart = null;
    if (offsetParameter) {
      timeStart = moment().startOf("day").add(offsetParameter, "days").unix();
    } else {
      timeStart = moment().startOf("day").unix();
    }
    let end = 7;

    let request = await axios.get(
      `http://localhost:80/classes?start=${timeStart}&days=${end}`
    );
    setIsLoading(false);
    if (request.data.success === true) {
      console.log(new Date(request.data.classes[0].date)); // create also native javascript object

      request.data.classes.map(function (obj) {
        obj.dateObject = new Date(obj.date);
        obj.intTime = parseInt(obj.time);
        obj.dateSeconds = moment(obj.date).unix();
        obj.hourSeconds = obj.intTime * 3600;
        obj.splitTime = obj.time.split(":");
        obj.minutes = parseInt(obj.splitTime[1]);
        obj.minSeconds = obj.minutes * 60;
        obj.timeInSeconds = obj.minSeconds + obj.hourSeconds + obj.dateSeconds;
      });

      console.log(request.data.classes);
      // sort yoga classes by time
      setYogaClasses(
        request.data.classes.sort((a, b) => a.intTime - b.intTime)
      );
    } else {
      console.log("something went wrong");
    }
  }
  useEffect(() => {
    callBackend();
  }, []);

  yogaClasses.map((yogaClass) => {
    for (let j = 0; j < 7; j++) {
      if (yogaClass.dateObject.getTime() === daysArray[j].getTime()) {
        if (dailyYogaClasses[j]) {
          // push onto existing array
          dailyYogaClasses[j].push(yogaClass);
        } else {
          // create an array and add yoga class
          dailyYogaClasses[j] = [];
          dailyYogaClasses[j].push(yogaClass);
        }
      }
    }
  });

  console.log(dailyYogaClasses, "test");

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
      {!isLoading ? (
        <div className="row schedule-page-content">
          {daysArray.map((day, index) => (
            <div className="date-header" key={day}>
              {day.toDateString()}
              {dailyYogaClasses[index] ? (
                dailyYogaClasses[index].map((yogaClass) => (
                  <div className="yoga-class" key={yogaClass._id}>
                    <Class
                      classType={yogaClass.type}
                      classDate={yogaClass.dateObject}
                      classStartTime={convertTimeTo12Hr(yogaClass.time)}
                      classEndTime={convertTimeTo12Hr(
                        calculateEndTime(yogaClass.time, yogaClass.duration)
                      )}
                      classTeacher={yogaClass.teacher}
                      classCapacity={yogaClass.capacity}
                      stylePage={`/${yogaClass.type}`}
                      disabled={yogaClass.timeInSeconds < currentTime}
                      classId={yogaClass._id}
                      handleRegister={registerHandler}
                      handleEditClass={editClassHandler}
                      handleDeleteClass={deleteClassHandler}
                    />
                  </div>
                ))
              ) : (
                <p className="yoga-class">No Classes Scheduled</p>
              )}
            </div>
          ))}
          <div className="days-buttons">
            {" "}
            <button
              className="btn btn-outline-success change-days-btn"
              onClick={subtractDays}
            >
              Previous Week
            </button>{" "}
            <button
              className="btn btn-outline-success change-days-btn"
              onClick={addDays}
            >
              Next Week
            </button>
          </div>
        </div>
      ) : (
        <div className="row schedule-page-content spinner">
          <div class="spinner-border" role="status">
            <span class="sr-only"> Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
