import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { banners } from "../data";
import ShowsSearch from './ShowsSearch'

const CarouselShows = ({handleSubmit, handleChange, search,}) => {
  return (
   <div>
   <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      transitionTime={1500}
    >
      {banners.map((b, i) => (
        <div key={i}>
          <img src={b} alt="banner" />
        </div>
      ))}
    </Carousel>
    <ShowsSearch
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      search={search}
    />
  </div>
  );
};

export default CarouselShows;
