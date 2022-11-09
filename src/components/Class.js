import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "../styles/Class.css";

const Class = (props) => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

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
        {" "}
        {loggedIn ? (
          <button
            className="btn register-btn"
            disabled={props.disabled}
            onClick={props.handleRegister}
          >
            {props.disabled ? "Registration Closed" : "Register"}
          </button>
        ) : (
          <p className="not-signed-in-text">
            Please{" "}
            <Link className="login-link" to="/login">
              sign in
            </Link>{" "}
            to register
          </p>
        )}
      </div>
      {props.isRegistered && <div>User Is Registered</div>}
      {authCtx.isAdmin && (
        <div>
          <button
            className="btn register-btn"
            disabled={props.disabled}
            onClick={props.handleEditClass}
          >
            {props.disabled ? "Complete" : "Edit Class"}
          </button>{" "}
          <button
            className="btn register-btn"
            disabled={props.disabled}
            onClick={props.handleDeleteClass}
          >
            {props.disabled ? "Complete" : "Delete Class"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Class;
