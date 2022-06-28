import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/schedule">
                Schedule
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <li class="d-flex">
            <Link class="btn btn-outline-success" to="/login">
              Sign In
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
