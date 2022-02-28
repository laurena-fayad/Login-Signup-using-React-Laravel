import React from "react";
import AboutUs from "../components/AboutUs";
import CarouselContainer from "../components/CarouselContainer";
import ContactForm from "../components/ContactForm";

const Landing = () => {
  return (
    <div>
      <CarouselContainer/>
      <AboutUs/>
      <ContactForm />
    </div>
  );
};

export default Landing;
