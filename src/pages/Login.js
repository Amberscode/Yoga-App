import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  // const emailInput = emailValue;

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const userLoginData = { email: emailValue, password: passwordValue };

    try {
      // send user data to backend
      let loginDataFromBackend = await axios.post(
        "http://localhost:80/user/login",
        userLoginData
      );

      if (loginDataFromBackend.data.success === true) {
        // clear form
        // store token in localstorage
        // store expiry in localstorage
        // store name in localstorage
        window.localStorage.setItem(
          "token",
          loginDataFromBackend.data.auth.token
        );
        window.localStorage.setItem(
          "expiry",
          loginDataFromBackend.data.auth.expiry
        );
        window.localStorage.setItem(
          "name",
          loginDataFromBackend.data.firstName
        );

        // let token = window.localStorage.getItem("token")
        // if(token.length > 0) return true

        setEmailValue("");
        setPasswordValue("");
      } else {
        // something went wrong on backend
        alert("something went wrong");
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
          <form className="login-form" onSubmit={handleSubmitLogin}>
            <h1>Login to your account</h1>
            <div className="form-group">
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
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
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
          <p className="sign-up-text">
            New to the studio? Click below to sign up!
          </p>
          <Link className="btn btn-outline-success signUp-btn" to="/signup">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
