import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/images/background.jpg";
import banner2 from "../assets/images/background2.jpg";
import banner3 from "../assets/images/background3.jpg";
import banner4 from "../assets/images/background4.jpg";
import banner5 from "../assets/images/background5.jpg";
import banner6 from "../assets/images/background6.jpg";
import banner7 from "../assets/images/background7.jpg";
import banner8 from "../assets/images/background8.jpg";
import banner9 from "../assets/images/background9.jpg";
import banner10 from "../assets/images/background10.jpg";

const CarouselShows = () => {
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
  ];

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      transitionTime={1500}
    >
      {banners.map((b) => (
        <div>
          <img src={b} alt="banner" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselShows;
