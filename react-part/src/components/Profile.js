import React from "react";

const Profile = () => {
  
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
                  placeholder="Laurena"
                />
              </div>
              <div class="mt-2 text-end">
                  <button class="btn btn-primary profile-button" type="button">
                Update Name
                  </button>
            </div>

            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="email"
                />
              </div>
              <div class="mt-2 text-end">
                  <button class="btn btn-primary profile-button" type="button">
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
  )
}

export default Profile
