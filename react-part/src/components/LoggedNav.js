import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoggedNav = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link to="/dashboard" className="navbar-brand">
            bookmates
          </Link>
          <input className="search form-control form-control-dark w-50" type="text" placeholder="Search" aria-label="Search"></input>
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                >
                  Edit Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  aria-current="page"
                  onClick={logout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoggedNav;