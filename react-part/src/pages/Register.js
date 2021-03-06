import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import logo from "./../assets/bookmates-transparent.png";
import Footer from "../components/Footer";

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (password.length >= 6 && name.length >=2 && password == password_confirmation){

      const user = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      };
  
      axios
        .post("http://127.0.0.1:8000/api/auth/register", { ...user })
        .then((res) => {
          if (res.data.message == "User successfully registered") {
            navigate("/login");
          }else if (res.data.message == "Email already taken"){
            document.getElementById("registered").innerHTML = "Email is already taken"
          }
        })
    }else if (password.length < 6){
      document.getElementById("registered").innerHTML = "Password must be at least 6 characters"
    }else if (name.length < 2){
      document.getElementById("registered").innerHTML = "Name must be at least 2 characters"
    }else if (password != password_confirmation){
      document.getElementById("registered").innerHTML = "Passwords do not match"
    }
  };

  return (
    <div>
      <Nav />
      <div className="container col-xl-10 col-xxl-8 py-4">
        <div className="g-lg-5 py-5 ">
          <div className="col-md-10 mx-auto col-lg-5">
            <img
              src={logo}
              className="d-block mx-auto img-fluid"
              alt="bookmates logo"
              width="250"
              height="250"
            />

            <div className="text-center register mb-3"> Create an account</div>

            <form
              onSubmit={submit}
              className="p-4 p-md-5 border rounded-3 bg-light"
            >
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password Confirmation"
                  required
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <label for="floatingPassword">Password Confirmation</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign Up
              </button>
            </form>
            <div id="registered" className="text-center py-4"></div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
