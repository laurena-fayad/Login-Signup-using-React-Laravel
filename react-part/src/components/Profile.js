import React , {useEffect, useState} from "react";
import axios from 'axios';

const Profile = () => {
  
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
                <input
                  type="text"
                  class="form-control"
                  placeholder={name}
                  value=""
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder={email}
                  value=""
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  value=""
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
