import React from "react";
import { Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ProtectedRoute = () => {
  let isAuth = false;
  const token = localStorage.getItem("token");

  if (token != null) {
    isAuth = true;
  } else {
    isAuth = false;
  }

  return isAuth ? <Outlet /> : <ErrorPage/>;
};

export default ProtectedRoute;
