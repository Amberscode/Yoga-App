import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "../styles/Class.css";

const Class = (props) => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  const isAdmin = authCtx.isAdmin;
  const navigate = useNavigate();

  const [showStudents, setShowStudents] = useState(false);
  const [usersRegistered, setUsersRegistered] = useState(false);
  const usersArray = props.registeredUsers;

  const studentsRegistered = () => {
    if (usersArray.length > 0) {
      setUsersRegistered(true);
    }
  };
  useEffect(() => {
    studentsRegistered();
  }, []);

  const toggleStudentList = (event) => {
    setShowStudents(!showStudents);
    event.target.blur();
  };

  const navigateToStylePage = () => {
    navigate(props.stylePage);
  };

  return (
    <div className="row class-item">
      <p className="col-md-4 class-item-content class-time">
        {props.classStartTime} - {props.classEndTime}
      </p>
      <p
        className="col-md-3 class-item-content class-type"
        onClick={navigateToStylePage}
      >
        {props.classType} Yoga
      </p>
      <p className=" col-md-2 class-item-content">{props.classTeacher}</p>
      <div className="col-md-3 class-item-content">
        {props.isCanceled && (
          <button className="btn register-btn" disabled={true}>
            Class Canceled
          </button>
        )}
        {loggedIn && !props.isRegistered && !props.isCanceled && (
          <button
            className="btn register-btn"
            disabled={props.disabled}
            onClick={props.handleRegister}
          >
            {props.disabled ? "Registration Closed" : "Register"}
          </button>
        )}
        {loggedIn && props.isRegistered && !props.isCanceled && (
          <button className="btn register-btn" disabled={true}>
            Registered
          </button>
        )}
        {!loggedIn && (
          <p className="not-signed-in-text">
            Please{" "}
            <Link className="login-link" to="/login">
              sign in
            </Link>{" "}
            to register
          </p>
        )}
      </div>
      {showStudents && usersRegistered && (
        <ul>
          {usersArray.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
      {showStudents && !usersRegistered && <p>No Students Registered</p>}
      {isAdmin && (
        <div>
          <button
            className="btn admin-btn"
            disabled={props.disabled}
            onClick={props.handleEditClass}
          >
            {props.disabled ? "Complete" : "Edit Class"}
          </button>{" "}
          <button
            className="btn admin-btn"
            disabled={props.disabled}
            onClick={props.handleDeleteClass}
          >
            {props.disabled ? "Complete" : "Delete Class"}
          </button>{" "}
          <button className="btn admin-btn" onClick={toggleStudentList}>
            {showStudents ? "Close Student List" : "See Student List"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Class;
