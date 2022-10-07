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
      <p className="col-sm-3 class-item-content class-time">
        {props.classStartTime} - {props.classEndTime}
      </p>
      <p
        className="col-sm-3 class-item-content class-type"
        onClick={navigateToStylePage}
      >
        {props.classType} Yoga
      </p>
      <p className=" col-sm-3 class-item-content">{props.classTeacher}</p>
      <div className="col-sm-3 class-item-content">
        {" "}
        {loggedIn ? (
          <button className="btn register-btn">Register</button>
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
    </div>
  );
};

export default Class;
