import { useState, useEffect } from "react";
import Slider from "react-slick";
import VideocardHome from "../VideoCard Home/VideocardHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel_Category.css";

function CategoryCarousel({ categoryId }) {
  const [videos, setVideos] = useState([]);

  const fetchVideosByCategory = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/videos/category/${categoryId}`,
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
        console.error(
          "Erreur lors de la récupération des vidéos par catégorie."
        );
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  useEffect(() => {
    fetchVideosByCategory();
  }, [categoryId]);

  return (
    <section>
      <Slider
        className="slider_Home"
        dots
        finite
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
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
              userId={video.userId}
              username={video.username}
              url={video.URL_video}
              date={video.date_publication}
              avatar={video.avatar}
              videoId={video.video_id}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CategoryCarousel;
