import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";

const NavBar = () => {
  /* https://stackoverflow.com/questions/52248179/how-to-use-data-toggle-collapse-in-reactjs-with-bootstrap */
  const [show, setShow] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-brand fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faSpa} /> Yoga
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          style={show ? { display: "block" } : { display: "none" }}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/about"
                onClick={() => setShow(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/schedule"
                onClick={() => setShow(false)}
              >
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => setShow(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          {!isLoggedIn && (
            <li className="d-flex">
              <Link
                className="btn btn-outline-success nav-btn"
                to="/login"
                onClick={() => setShow(false)}
              >
                Sign In
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="d-flex">
              <button
                className="btn btn-outline-success nav-btn"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
