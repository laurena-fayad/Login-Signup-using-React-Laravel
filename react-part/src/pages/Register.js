import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const submit = async (e) => {
    e.preventDefault();

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
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Create An Account</h1>
        <input
          type="name"
          class="form-control"
          placeholder="Full Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          class="form-control"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          required
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default Register;
