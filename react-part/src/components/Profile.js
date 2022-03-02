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

    axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {email:updated_email},
      {headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        if (res.data.message == "Email updated") {
          localStorage.setItem("email", res.data.user.email);
          document.getElementById("updates").innerHTML = "Email updated!"
        }
      })
      .catch(function (error) {
        document.getElementById("updates").innerHTML = error
      });
  };

  const updateName = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {name:updated_name},
      {headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        if (res.data.message == "Name updated") {
          localStorage.setItem("name", res.data.user.name);
          document.getElementById("updates").innerHTML = "Name updated!"
        }
      })
      .catch(function (error) {
        document.getElementById("updates").innerHTML = error
      });
  };


  const updatePassword = (e) => {
    e.preventDefault();

    if (updated_password == password_conf){
      axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {password:updated_password, password_confirmation:password_conf},
      {headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        if (res.data.message == "Password updated") {
          document.getElementById("updates").innerHTML = "Password updated!"
        }
      })
      .catch(function (error) {
        document.getElementById("updates").innerHTML = error
      });
    }else{
      document.getElementById("updates").innerHTML = "Passwords do not match!"
    }
  };


  return (
    <div class="bg-white mt-1 mb-5">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="p-3 py-5">
            <div class="d-flex align-items-center mb-3">
              <h4 class="text-right">Edit Profile Information</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Name</label>
                <input type="text" class="form-control" placeholder={name} 
                onChange={(e) => setUpdatedName(e.target.value)}/>
              </div>
              <div class="mt-2 text-end">
                <button class="btn btn-primary profile-button" type="button" onClick={updateName}>
                  Update Name
                </button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Email Address</label>
                <input type="text" class="form-control" placeholder={email} 
                onChange={(e) => setUpdatedEmail(e.target.value)}/>
              </div>
              <div class="mt-2 text-end">
                <button class="btn btn-primary profile-button" type="button" onClick={updateEmail}>
                  Update Email
                </button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  onChange={(e) => setUpdatedPassword(e.target.value)}/>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Password Confirmation</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  onChange={(e) => setPasswordConf(e.target.value)}/>
                <div class="mt-2 text-end">
                  <button class="btn btn-primary profile-button" type="button" onClick={updatePassword}>
                    Confirm Updated Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="updates" class="text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;