import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoggedNav from "../components/LoggedNav";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  let navigate = useNavigate();

  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));

    axios
      .get("http://127.0.0.1:8000/api/auth/user-profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div>
      <LoggedNav />
      <Sidebar/>
    </div>
  );
};

export default Dashboard;
