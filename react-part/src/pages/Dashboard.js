import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AboutUs from "../components/AboutUs";
import CarouselContainer from "../components/CarouselContainer";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LoggedNav from "../components/LoggedNav";

const Dashboard = () => {
  let navigate = useNavigate();

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
    <div>
      <LoggedNav />
      <CarouselContainer />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Dashboard;
