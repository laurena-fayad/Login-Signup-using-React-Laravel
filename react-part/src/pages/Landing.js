import React from "react";
import AboutUs from "../components/AboutUs";
import CarouselContainer from "../components/CarouselContainer";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav"

const Landing = () => {
  return (
    <div>
      <Nav />
      <CarouselContainer/>
      <AboutUs/>
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default Landing;
