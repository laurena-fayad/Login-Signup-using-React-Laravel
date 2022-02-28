import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import image1 from "./../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image1} alt="bookmates proximity tracker" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image2} alt="bookmates profile" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image3} alt="bookmates search" />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselContainer;
