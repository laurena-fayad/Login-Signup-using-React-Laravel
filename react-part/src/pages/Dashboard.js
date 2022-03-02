import React from "react";
import LoggedNav from "../components/LoggedNav";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <LoggedNav />
      <Sidebar/>
    </div>
  );
};

export default Dashboard;
