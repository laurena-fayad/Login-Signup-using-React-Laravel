import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const LoggedNav = () => {

    let navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link to="/dashboard" className="navbar-brand">
          bookmates
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {/* <li className="nav-item">
              <Link
                to="/login"
                className="nav-link active"
                aria-current="page"
              >
                Edit Profile
              </Link>
            </li> */}
            <li className="nav-item">
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default LoggedNav