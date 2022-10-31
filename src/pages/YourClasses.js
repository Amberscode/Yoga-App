import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/YourClasses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../store/auth-context";

const YourClasses = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
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
            <p className="user-logged-in-welcome">
              Welcome, {authCtx.userName}
            </p>
            <p className="yourclasses-text">You have no upcoming classes.</p>

            {/* {props.yogaClasses.map((yogaClass) => (
        <Class
          classType={props.type}
          classDate={props.date}
          classTime={props.time}
          classTeacher={props.teacher}
          classCapacity={props.capacity}
          classDuration={props.duration}
          key={props.id}
        />
      ))} */}
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
