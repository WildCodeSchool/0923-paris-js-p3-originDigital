import React from "react";
import Slider from "react-slick";
import VideocardHome from "../VideoCard Home/VideocardHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function SimpleCarousel() {
  return (
    <section>
      <Slider
        className="slider_Home"
        dots
        infinite
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        arrows={false}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
      >
        <div>
          <VideocardHome />
        </div>
        <div>
          <VideocardHome />
        </div>
        <div>
          <VideocardHome />
        </div>
      </Slider>
    </section>
  );
}

export default SimpleCarousel;
