import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="error-template">
              <h1>Error!</h1>
              <h2>Unauthorized User</h2>
              <div className="error-actions">
                <a className="btn btn-primary btn-lg" onClick={goToLogin}>
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
