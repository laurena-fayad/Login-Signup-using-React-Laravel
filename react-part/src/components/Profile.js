import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const token = localStorage.getItem("token");
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  const password = "";

  const [updated_email, setUpdatedEmail] = useState("");
  const [updated_name, setUpdatedName] = useState("");
  const [updated_password, setUpdatedPassword] = useState("");
  const [password_conf, setPasswordConf] = useState("");

  const updateEmail = (e) => {
    e.preventDefault();

    document.getElementById("regularmsg").innerHTML = ""
    document.getElementById("errormsg").innerHTML = ""

    axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {email:updated_email},
      {headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        if (res.data.message == "Email updated") {
          localStorage.setItem("email", res.data.user.email);
          document.getElementById("regularmsg").innerHTML = "Email updated!"
        }else if (res.data.message == "Email already taken"){
          document.getElementById("errormsg").innerHTML = "Email is already taken"
        }})
      .catch(function (error) {
        document.getElementById("errormsg").innerHTML = error
      });
  };

  const updateName = (e) => {
    e.preventDefault();
    document.getElementById("regularmsg").innerHTML = ""
    document.getElementById("errormsg").innerHTML = ""

    axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {name:updated_name},
      {headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        if (res.data.message == "Name updated") {
          localStorage.setItem("name", res.data.user.name);
          document.getElementById("regularmsg").innerHTML = "Name updated!"
        }
      })
      .catch(function (error) {
        document.getElementById("errormsg").innerHTML = error
      });
  };


  const updatePassword = (e) => {
    e.preventDefault();
    document.getElementById("regularmsg").innerHTML = ""
    document.getElementById("errormsg").innerHTML = ""

    if (updated_password == password_conf){
      axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {password:updated_password, password_confirmation:password_conf},
      {headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        if (res.data.message == "Password updated") {
          document.getElementById("regularmsg").innerHTML = "Password updated!"
        }
      })
      .catch(function (error) {
        document.getElementById("errormsg").innerHTML = "<div className=errormsg>" + error + "</div>"
      });
    }else{
      document.getElementById("errormsg").innerHTML = "Passwords do not match!"
    }
  };


  return (
    <div className="bg-white mt-1 mb-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="p-3 py-5">
            <div className="d-flex align-items-center mb-3">
              <h4 className="text-right">Edit Profile Information</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="labels">Name</label>
                <input type="text" class="form-control" placeholder={name} 
                onChange={(e) => setUpdatedName(e.target.value)}/>
              </div>
              <div className="mt-2 text-end">
                <button className="btn btn-primary profile-button" type="button" onClick={updateName}>
                  Update Name
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Email Address</label>
                <input type="text" class="form-control" placeholder={email} 
                onChange={(e) => setUpdatedEmail(e.target.value)}/>
              </div>
              <div className="mt-2 text-end">
                <button className="btn btn-primary profile-button" type="button" onClick={updateEmail}>
                  Update Email
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  onChange={(e) => setUpdatedPassword(e.target.value)}/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Password Confirmation</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPasswordConf(e.target.value)}/>
                <div className="mt-2 text-end">
                  <button className="btn btn-primary profile-button" type="button" onClick={updatePassword}>
                    Confirm Updated Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="regularmsg" className="text-center"></div>
          <div id="errormsg" className="text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;