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
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        bookmates
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <input
        className="search form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </header>
  );
};

export default LoggedNav;