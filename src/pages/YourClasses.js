import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../store/auth-context";

const YourClasses = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className="login-page container-fluid">
      <div className="row">
        <div className="col-xl-7 col-lg-6  login-design order-2 order-lg-1">
          <FontAwesomeIcon icon={faSpa} className="yoga-icon" />
          <p className="yoga-logo-text">Yoga Studio</p>
        </div>
        <div className="col-xl-5 col-lg-6 login-content order-1 order-lg-2">
          <p className="user-logged-in-welcome">Welcome, {authCtx.userName}</p>
          <button
            className="btn btn-outline-success changeUser-btn"
            onClick={logoutHandler}
          >
            Change User
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourClasses;
