import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { banners } from "../data";

const CarouselShows = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      transitionTime={1500}
    >
      {banners.map((b, i) => (
        <div key={i}>
          <img src={b} alt="banner" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselShows;
