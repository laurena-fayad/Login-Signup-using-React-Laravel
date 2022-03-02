import React, { useState } from "react";

const EditProfile = () => {
  return (
    <div class="rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex flex-column align-items-center p-3 py-5">
            <span class="font-weight-bold">Name</span>
            <span class="text-black-50">Email</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Edit Profile Information</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
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
                  placeholder="Email Address"
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

export default EditProfile;
