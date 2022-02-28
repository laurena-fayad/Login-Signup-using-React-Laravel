import React from "react";
import AboutUs from "../components/AboutUs";
import CarouselContainer from "../components/CarouselContainer";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <CarouselContainer/>
      <AboutUs/>
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default Landing;
