import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  // todo: change this
  // goal of function is to navigate to login

  const [registerFormValue, setRegisterFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reenterPassword: "",
  });

  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [reenterPasswordIsValid, setReenterPasswordIsValid] = useState(true);

  const handleRegisterFormChange = (event) => {
    setRegisterFormValue({
      ...registerFormValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    if (registerFormValue.firstName.trim() === "") {
      setFirstNameIsValid(false);
      return;
    } else {
      setFirstNameIsValid(true);
    }

    if (registerFormValue.lastName.trim() === "") {
      setLastNameIsValid(false);
      return;
    } else {
      setLastNameIsValid(true);
    }

    if (registerFormValue.email.trim() === "") {
      setEmailIsValid(false);
      return;
    } else {
      setEmailIsValid(true);
    }

    if (
      !registerFormValue.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailIsValid(false);
      return;
    } else {
      setEmailIsValid(true);
    }

    if (registerFormValue.password.length < 6) {
      setPasswordIsValid(false);
      return;
    } else {
      setPasswordIsValid(true);
    }

    if (registerFormValue.password != registerFormValue.reenterPassword) {
      setReenterPasswordIsValid(false);
      return;
    } else {
      setReenterPasswordIsValid(true);
    }

    const newUserData = {
      firstName: registerFormValue.firstName,
      lastName: registerFormValue.lastName,
      email: registerFormValue.email,
      password: registerFormValue.password,
    };

    try {
      // send user data to backend
      let returnedDataFromBackend = await axios.post(
        "http://localhost:80/user/create",
        newUserData
      );

      if (returnedDataFromBackend.data.success === true) {
        // clear form
        setRegisterFormValue({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          reenterPassword: "",
        });

        // replace this with react router
        window.location = "/login";
        // want to send user to login page
      } else {
        // something went wrong on backend
        if (returnedDataFromBackend.data.message) {
          alert(returnedDataFromBackend.data.message);
        } else {
          alert("something went wrong");
        }
      }
    } catch (e) {
      console.log(e, "something went wrong");
    }
  };

  return (
    <div className="login-page container-fluid">
      <div className="row">
        <div className="col-xl-7 col-lg-6  login-design order-2 order-lg-1">
          <FontAwesomeIcon icon={faSpa} className="yoga-icon" />
          <p className="yoga-logo-text">Yoga Studio</p>
        </div>
        <div className="col-xl-5 col-lg-6 login-content order-1 order-lg-2">
          <form className="login-form" onSubmit={handleSubmitSignUp}>
            <h1>Create your account</h1>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
                value={registerFormValue.firstName}
                onChange={handleRegisterFormChange}
                aria-describedby="firstName"
                // placeholder="Enter your first name"
              />
              {!firstNameIsValid && (
                <p className="error-text">Please enter your name</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="lastName"
                value={registerFormValue.lastName}
                onChange={handleRegisterFormChange}
                aria-describedby="LastName"
                // placeholder="Enter your last name"
              />
              {!lastNameIsValid && (
                <p className="error-text">Please enter your last name</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={registerFormValue.email}
                onChange={handleRegisterFormChange}
                aria-describedby="email"
                // placeholder="Enter your email"
              />
              {!emailIsValid ? (
                <p className="error-text">Please enter a valid email address</p>
              ) : (
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Create a Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="passwordInput"
                value={registerFormValue.password}
                onChange={handleRegisterFormChange}
              />
              {!passwordIsValid ? (
                <p className="error-text">
                  Password must be at least 6 characters long
                </p>
              ) : (
                <small
                  id="passwordRequirements"
                  className="form-text text-muted"
                >
                  Must be at least 6 characters long.
                </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="reenterPasswordInput">
                Re-enter Your Password
              </label>
              <input
                type="password"
                name="reenterPassword"
                className="form-control"
                id="reenterPasswordInput"
                value={registerFormValue.reenterPassword}
                onChange={handleRegisterFormChange}
              />
              {!reenterPasswordIsValid && (
                <p className="error-text">Passwords do not match</p>
              )}
            </div>
            <button type="submit" className="btn login-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
