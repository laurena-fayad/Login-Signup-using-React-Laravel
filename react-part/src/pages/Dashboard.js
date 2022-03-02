import React from "react";
import LoggedNav from "../components/LoggedNav";
import Sidebar from "../components/Sidebar";
import dashboardbg from "../assets/dashboard-bg.jpg"

const Dashboard = () => {
  return (
    <div>
      <LoggedNav />
      <Sidebar/>
      <img src={dashboardbg} alt="Library Background"/>;      
    </div>
  );
};

export default Dashboard;
