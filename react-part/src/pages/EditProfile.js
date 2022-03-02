import React from 'react'
import LoggedNav from "../components/LoggedNav";
import Sidebar from "../components/Sidebar";
import Profile from '../components/Profile';


const EditProfile = () => {
  return (
    <div>
      <LoggedNav />
      <Sidebar/>
      <Profile/>
    </div>
  )
}

export default EditProfile