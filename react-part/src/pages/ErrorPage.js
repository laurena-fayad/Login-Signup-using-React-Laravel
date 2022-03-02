import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate ("/login")
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <div class="error-template">
            <h1>Error!</h1>
            <h2>Unauthorized User</h2>
            <div class="error-actions">
              <a class="btn btn-primary btn-lg" onClick={goToLogin}>
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
