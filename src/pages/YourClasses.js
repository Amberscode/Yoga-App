import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/YourClasses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../store/auth-context";
import moment from "moment";

const YourClasses = () => {
  const authCtx = useContext(AuthContext);
  const userName = authCtx.userName;
  const greetName = userName.charAt(0).toUpperCase() + userName.slice(1);

  const [isLoading, setIsLoading] = useState(false);
  const [registeredClasses, setRegisteredClasses] = useState([]);
  let currentTime = moment().unix();

  const logoutHandler = () => {
    authCtx.logout();
  };

  // get user classes from backend
  async function getUserClasses() {
    if (!window.localStorage.getItem("token")) return [];
    let data = {
      token: window.localStorage.getItem("token"),
    };
    let request = await axios.post(`http://localhost:80/user/classes`, data);
    if (request.data.success === true) {
      let userClasses = request.data.classes.map(function (obj) {
        obj.dateObject = new Date(obj.date);
        obj.intTime = parseInt(obj.time);
        obj.dateSeconds = moment(obj.date).unix();
        obj.hourSeconds = obj.intTime * 3600;
        obj.splitTime = obj.time.split(":");
        obj.minutes = parseInt(obj.splitTime[1]);
        obj.minSeconds = obj.minutes * 60;
        obj.timeInSeconds = obj.minSeconds + obj.hourSeconds + obj.dateSeconds;
        return obj;
      });

      // show only classes today and in the future
      let futureClasses = userClasses.filter((userClass) =>
        moment(userClass.date).isSameOrAfter(Date.now(), "day")
      );

      console.log(futureClasses, "futureclasses");

      // sort classes by date
      return futureClasses.sort(
        (a, b) => a.dateSeconds - b.dateSeconds || a.intTime - b.intTime
      );
    } else {
      console.log("something went wrong");
    }
  }

  const deRegisterHandler = (classId) => async (event) => {
    let cloneArray = [...registeredClasses];
    let updatedClasses = cloneArray.filter((yoga) => yoga._id !== classId);
    setRegisteredClasses(updatedClasses);

    await axios.post("http://localhost:80/class/deregister", {
      classId: classId,
      token: window.localStorage.getItem("token"),
    });
    event.target.blur();
  };

  async function loadPage() {
    setIsLoading(true);
    let temporaryClasses = await getUserClasses();
    setRegisteredClasses(temporaryClasses);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPage();
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
    return `${padTo2Digits(hours)}: ${padTo2Digits(minutes)}`;
  };

  return (
    <div className="yourclasses-page container-fluid">
      <div className="row">
        <div className="col-lg-5  yourclasses-design order-2 order-lg-1">
          <FontAwesomeIcon icon={faSpa} className="yoga-icon-yourclasses" />
          <p className="yoga-logo-text-yourclasses">Yoga Studio</p>
        </div>
        {authCtx.isLoggedIn ? (
          <div className="col-lg-7 order-1 order-lg-2">
            <p className="user-logged-in-welcome">Welcome, {greetName}</p>
            {!isLoading ? (
              <div>
                {registeredClasses.length > 0 ? (
                  <div>
                    <p className="yourclasses-text">Your Upcoming Classes</p>
                    {registeredClasses.map((yourClass) => (
                      <div
                        className={
                          yourClass.isCanceled
                            ? "row class-canceled-text"
                            : "row classes-list-text"
                        }
                        key={yourClass._id}
                      >
                        <p className="col-md-3 fw-bolder">
                          {yourClass.dateObject.toDateString()}
                        </p>
                        <p className="col-md-3">
                          {convertTimeTo12Hr(yourClass.time)} -{" "}
                          {convertTimeTo12Hr(
                            calculateEndTime(yourClass.time, yourClass.duration)
                          )}
                        </p>
                        <p className="col-md-2">{yourClass.type} Yoga</p>
                        {!yourClass.isCanceled && (
                          <p className="col-md-2">{yourClass.teacher}</p>
                        )}
                        {yourClass.isCanceled ? (
                          <p className="cancel-text col-md-3">Class Canceled</p>
                        ) : (
                          <button
                            onClick={deRegisterHandler(yourClass._id)}
                            className="btn btn-outline-success deregister-btn"
                            disabled={
                              yourClass.timeInSeconds < currentTime + 3600
                            }
                          >
                            {yourClass.timeInSeconds < currentTime + 3600
                              ? "Registration Closed"
                              : "Deregister"}
                          </button>
                        )}
                      </div>
                    ))}{" "}
                  </div>
                ) : (
                  <p className="noclasses-text">
                    You have no upcoming classes.
                  </p>
                )}
              </div>
            ) : (
              <div className="row spinner your-spinner">
                <div className="spinner-border" role="status">
                  <span className="sr-only"> Loading...</span>
                </div>
              </div>
            )}

            <div className="container text-center">
              <Link
                className="btn btn-outline-success yourclasses-btn"
                to="/login"
                onClick={logoutHandler}
              >
                Change User
              </Link>
              <Link
                className="btn btn-outline-success yourclasses-btn"
                to="/schedule"
              >
                Register for Classes
              </Link>
            </div>
          </div>
        ) : (
          <div className="col-lg-5  yourclasses-design order-2 order-lg-1">
            <p className="yourclasses-text">
              Please login to view your booked classes
            </p>
            <Link
              className="btn btn-outline-success yourclasses-btn"
              to="/login"
              onClick={logoutHandler}
            >
              Login
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourClasses;
