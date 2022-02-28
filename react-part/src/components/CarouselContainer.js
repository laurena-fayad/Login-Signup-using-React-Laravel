import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);
}
export default CarouselContainer;