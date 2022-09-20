import { useState, useContext } from "react";
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
        <p className="user-logged-in-welcome">Welcome, {authCtx.userName}</p>
      </div>
      <div className="row">
        <div className="col-md-5  yourclasses-design order-2 order-md-1">
          <FontAwesomeIcon icon={faSpa} className="yoga-icon-yourclasses" />
          <p className="yoga-logo-text-yourclasses">Yoga Studio</p>
        </div>
        <div className="col-md-7 login-content order-1 order-md-2">
          <p className="yourclasses-text">You have no upcoming classes</p>
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
    </div>
  );
};

export default YourClasses;
