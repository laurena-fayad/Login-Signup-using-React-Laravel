import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const password = "";

  const updateEmail = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {email:email})
      .then((res) => {
        if (res.data.message == "User data successfully updated") {
          localStorage.setItem("email", res.data.user.email);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateName = () => {
    axios
      .post("http://127.0.0.1:8000/api/auth/update-profile", {name:name})
      .then((res) => {
        if (res.data.message == "User data successfully updated") {
          localStorage.setItem("name", res.data.user.name);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
                <input type="text" class="form-control" placeholder={name} />
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
                <input type="text" class="form-control" placeholder={email} />
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
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
                <div class="mt-2 text-end">
                  <button class="btn btn-primary profile-button" type="button">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
