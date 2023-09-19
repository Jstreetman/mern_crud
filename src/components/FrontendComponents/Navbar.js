import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container-md">
          <a className="navbar-brand" href="/">
            <span className="text-warning">M</span>
            ern
          </a>

          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="/register" className="nav-link">
                  Register
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="nav-link">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
