import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav"
import logo from "./../assets/bookmates-transparent.png";
import Footer from "../components/Footer";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/login", { ...user })
      .then((res) => {
        if (res.data.user.email == email) {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("email", res.data.user.email);
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Nav />
      <div className="container col-xl-10 col-xxl-8 py-5">
        <div className="g-lg-5 py-5 ">
          <div className="col-md-10 mx-auto col-lg-5">
            <img
              src={logo}
              className="d-block mx-auto img-fluid"
              alt="bookmates logo"
              width="250"
              height="250"
            />

            <form
              onSubmit={submit}
              className="p-4 p-md-5 border rounded-3 bg-light"
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
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
                <label for="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
