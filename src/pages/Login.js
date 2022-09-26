import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../store/auth-context";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const logoutHandler = () => {
    authCtx.logout();
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    if (emailValue.trim() === "") {
      setEmailIsValid(false);
      return;
    } else {
      setEmailIsValid(true);
    }

    if (
      !emailValue.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailIsValid(false);
      return;
    } else {
      setEmailIsValid(true);
    }

    if (passwordValue.length < 6) {
      setPasswordIsValid(false);
      return;
    } else {
      setPasswordIsValid(true);
    }

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
        // window.localStorage.setItem(
        //   "token",
        //   loginDataFromBackend.data.auth.token
        // );
        // window.localStorage.setItem(
        //   "expiry",
        //   loginDataFromBackend.data.auth.expiry
        // );
        // window.localStorage.setItem(
        //   "name",
        //   loginDataFromBackend.data.firstName
        // );

        let userName = loginDataFromBackend.data.firstName;
        let userToken = loginDataFromBackend.data.auth.token;
        let expiry = loginDataFromBackend.data.auth.expiry;
        let isAdmin = loginDataFromBackend.data.isAdmin;

        authCtx.login(userToken, userName, expiry, isAdmin);
        // if(token.length > 0) return true

        setEmailValue("");
        setPasswordValue("");
        navigate("/yourclasses");
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
        {!authCtx.isLoggedIn ? (
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
                {!emailIsValid ? (
                  <p className="error-text">
                    Please enter a valid email address
                  </p>
                ) : (
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                )}
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
        ) : (
          <div className="col-xl-5 col-lg-6 login-content order-1 order-lg-2">
            <p className="user-logged-in-welcome">
              Welcome, {authCtx.userName}
            </p>
            <button
              className="btn btn-outline-success changeUser-btn"
              onClick={logoutHandler}
            >
              Change User
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
