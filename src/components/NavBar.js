import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useState } from "react";

const NavBar = () => {
  /* https://stackoverflow.com/questions/52248179/how-to-use-data-toggle-collapse-in-reactjs-with-bootstrap */
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-brand static-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faSpa} /> Home
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
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <li className="d-flex">
            <Link className="btn btn-outline-success" to="/login">
              Sign In
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
