import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [registerFormValue, setRegisterFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reenterPassword: "",
  });

  const handleRegisterFormChange = (event) => {
    setRegisterFormValue({
      ...registerFormValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const newUserData = {
      firstName: registerFormValue.firstName,
      lastName: registerFormValue.lastName,
      email: registerFormValue.email,
      password: registerFormValue.password,
    };
    console.log(newUserData);

    try {
      let responseFromServer = await axios.post(
        "http://localhost:80/user/create",
        newUserData
      );
      console.log(responseFromServer.data);
      setRegisterFormValue({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        reenterPassword: "",
      });
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
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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
              <small id="passwordRequirements" className="form-text text-muted">
                Must be at least 6 characters long.
              </small>
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
