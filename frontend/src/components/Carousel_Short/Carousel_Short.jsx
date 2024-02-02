import React from "react";
import Slider from "react-slick";
import ShortCard from "../ShortCard/ShortCard";
import image from "../../assets/IMG_20210528_173635.jpg";
import image1 from "../../assets/IMG_20201008_111139.jpg";
import image2 from "../../assets/IMG_20160222_142007247.jpg";
import image3 from "../../assets/IMG_20210523_181918.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel_Short.css";

function CarouselShort() {
  return (
    <section>
      <Slider
        className="slider_Home"
        infinite
        speed={500}
        slidesToShow={6}
        slidesToScroll={3}
        arrows={false}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        <div>
          <ShortCard
            title="Short Title 1"
            thumbnailUrl={image}
            author="Author 1"
            views={1000}
            uploadDate="1 day ago"
          />
        </div>
        <div>
          <ShortCard
            title="Short Title 2"
            thumbnailUrl="src/assets/31yMnUP2cPc-SD.jpg"
            author="Author 2"
            views={500}
            uploadDate="2 days ago"
          />
        </div>
        <div>
          <ShortCard
            title="Short Title 3"
            thumbnailUrl={image1}
            author="Author 1"
            views={1000}
            uploadDate="1 day ago"
          />
        </div>
        <div>
          <ShortCard
            title="Short Title 4"
            thumbnailUrl={image2}
            author="Author 2"
            views={500}
            uploadDate="2 days ago"
          />
        </div>
        <div>
          <ShortCard
            title="Short Title 5"
            thumbnailUrl={image3}
            author="Author 2"
            views={500}
            uploadDate="2 days ago"
          />
        </div>
        <div>
          <ShortCard
            title="Short Title 6"
            thumbnailUrl="src/assets/31yMnUP2cPc-SD.jpg"
            author="Author 2"
            views={500}
            uploadDate="2 days ago"
          />
        </div>
        <div>
          <ShortCard
            title="Short Title 7"
            thumbnailUrl="src/assets/31yMnUP2cPc-SD.jpg"
            author="Author 2"
            views={500}
            uploadDate="2 days ago"
          />
        </div>
      </Slider>
    </section>
  );
}

export default CarouselShort;
