import { useState, useEffect } from "react";
import Class from "../components/Class";
import axios from "axios";
import "../styles/Schedule.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [yogaClasses, setYogaClasses] = useState([]);

  const [firstDay, setFirstDay] = useState(0);
  const [lastDay, setLastDay] = useState(7);
  const [offset, setOffset] = useState(0);

  let daysArray = [];
  let dailyYogaClasses = [];
  let currentTime = moment().unix();

  const [registeredClasses, setRegisteredClasses] = useState([]);

  const addDays = (event) => {
    setFirstDay(() => firstDay + 7);
    setLastDay(() => lastDay + 7);
    setOffset(() => offset + 7);

    getAllClasses(offset + 7);
    event.target.blur();
  };

  const subtractDays = (event) => {
    setFirstDay(() => firstDay - 7);
    setLastDay(() => lastDay - 7);
    setOffset(() => offset - 7);

    getAllClasses(offset - 7);
    event.target.blur();
  };

  const registerHandler = (classId) => async (event) => {
    let cloneArray = [...registeredClasses];
    cloneArray.push(classId);
    setRegisteredClasses(cloneArray);

    await axios.post("http://localhost:80/class/register", {
      classId: classId,
      token: window.localStorage.getItem("token"),
    });

    event.target.blur();
  };

  const editClassHandler = (classId) => async (event) => {
    event.preventDefault();
    console.log("edit");
    navigate(`/editclass/${classId}`);
  };

  const deleteClassHandler = (classId, registeredUsers) => async (event) => {
    if (registeredUsers.length > 0) {
      alert("You cannot delete a class with registered users");
    }
    await axios.post("http://localhost:80/class/delete", {
      classId: classId,
      token: window.localStorage.getItem("token"),
    });
    getAllClasses();
    event.target.blur();
  };

  for (let i = firstDay; i < lastDay; i++) {
    daysArray.push(moment().add(i, "days").startOf("day").toDate()); // create native javascript object
  }

  // get user classes from backend
  async function getUserClasses() {
    if (!window.localStorage.getItem("token")) return [];
    let data = {
      token: window.localStorage.getItem("token"),
    };
    let request = await axios.post(`http://localhost:80/user/classes`, data);

    let idArray = request.data.classes.map((item) => item._id);
    return idArray;
  }

  // everything that needs to be loaded before the page is displayed
  async function loadPage() {
    setIsLoading(true);
    await getAllClasses();
    let temporaryClasses = await getUserClasses();
    setRegisteredClasses(temporaryClasses);
    setIsLoading(false);
  }

  // check if user registered in class

  const checkRegistration = (classId) => {
    return registeredClasses.includes(classId);
  };

  // get all classes + users that are registered in it
  async function getAllClasses(offsetParameter) {
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
    if (request.data.success === true) {
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

      // sort yoga classes by time
      setYogaClasses(
        request.data.classes.sort((a, b) => a.intTime - b.intTime)
      );
    } else {
      console.log("something went wrong");
    }
  }
  useEffect(() => {
    loadPage();
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

  const convertTimeTo12Hr = (time) => {
    const timeArray = time.split(":");
    let ampm = "am";
    if (timeArray[0] >= 12) {
      ampm = "pm";
    }
    if (timeArray[0] > 12) {
      timeArray[0] = timeArray[0] - 12;
    }
    if (timeArray[0] < 10) {
      timeArray[0] = parseInt(timeArray[0], 10);
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
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
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
                      handleRegister={registerHandler(yogaClass._id)}
                      handleEditClass={editClassHandler(yogaClass._id)}
                      handleDeleteClass={deleteClassHandler(
                        yogaClass._id,
                        yogaClass.registeredUsers
                      )}
                      isRegistered={checkRegistration(yogaClass._id)}
                      isCanceled={yogaClass.isCanceled}
                      registeredUsers={yogaClass.registeredUsers}
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
          <div className="spinner-border" role="status">
            <span className="sr-only"> Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
