import { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
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

  return (
    <div className="login-page">
      <h1>Login to your account</h1>
      <form className="login-form">
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
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            // placeholder="Password"
          />
        </div>
        <button type="submit" className="btn login-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
