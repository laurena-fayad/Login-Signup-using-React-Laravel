import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/edit" className="nav-link active">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a className="logout nav-link" onClick={logout}>
                  Log Out
                </a>
              </li>
            </ul>           
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
