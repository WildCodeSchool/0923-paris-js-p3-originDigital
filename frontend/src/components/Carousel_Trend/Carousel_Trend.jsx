import { useState, useEffect } from "react";
import Slider from "react-slick";
import VideocardHome from "../VideoCard Home/VideocardHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel_Trend.css";

function CarouselTrend() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/videos/most-viewed`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.status === 200) {
        const videosData = await response.json();
        setVideos(videosData);
      } else {
        console.error("Erreur lors de la récupération des vidéos.");
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

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
        {videos.map((video) => (
          <div key={video.video_id}>
            <VideocardHome
              title={video.title}
              thumbnailUrl={video.thumbnail}
              user={video.user_id}
              views={video.views}
              uploadDate={video.date_publication}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CarouselTrend;
