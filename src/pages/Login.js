import { useState } from "react";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  // const firstNameInput = firstNameValue;
  // const lastNameInput = lastNameValue;
  // const emailInput = emailValue;

  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <div className="login-page container-fluid">
      <div className="row">
        <div className="col-xl-7 col-lg-6  login-design order-2 order-lg-1">
          <FontAwesomeIcon icon={faSpa} className="yoga-icon" />
          <p className="yoga-logo-text">Yoga Studio</p>
        </div>
        <div className="col-xl-5 col-lg-6 login-content order-1 order-lg-2">
          <form className="login-form">
            <h1>Login to your account</h1>
            <div class="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                value={firstNameValue}
                onChange={handleFirstNameChange}
                aria-describedby="firstName"
                // placeholder="Enter your first name"
              />
            </div>
            <div class="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastNameValue}
                onChange={handleLastNameChange}
                aria-describedby="LastName"
                // placeholder="Enter your last name"
              />
            </div>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={emailValue}
                onChange={handleEmailChange}
                aria-describedby="email"
                // placeholder="Enter your email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                value={passwordValue}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn login-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
