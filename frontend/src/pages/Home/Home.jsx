import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import CarouselTrend from "../../components/Carousel_Trend/Carousel_Trend";
import Carousel2 from "../../components/Carousel_Short/Carousel_Short";
import CategoryCarousel from "../../components/Carousel_Category/Carousel_Category";

function Home() {
  const [setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/categories`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const categoriesData = await response.json();
          setCategories(categoriesData);
        } else {
          console.error("Erreur lors de la récupération des catégories.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <main className="container_Home">
      <div className="container_Body_Home">
        <Header />
        <h1 className="title_Top">TOP VIEWS THIS WEEK</h1>
        <div className="container_Carousel">
          <CarouselTrend />
        </div>
        <h1 className="title_Short">SHORTS</h1>
        <div className="container_Short">
          <Carousel2 />
        </div>
        <h1 className="title_Category_Animal">CATEGORY ANIMALS</h1>
        <div className="container_Carousel2">
          <CategoryCarousel categoryId={7} />
        </div>
        <div className="container_Carousel3">
          <h1 className="title_Category_Food">CATEGORY FOOD</h1>
          <CategoryCarousel categoryId={1} />
        </div>
      </div>
    </main>
  );
}

export default Home;
