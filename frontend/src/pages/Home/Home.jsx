import Header from "../../components/Header/Header";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Carousel2 from "../../components/Carousel2/Carousel2";

function Home() {
  return (
    <main className="container_Home">
      <div className="container_Body_Home">
        <Header />
        <h1 className="title_Top">TOP VIEWS THIS WEEK</h1>
        <div className="container_Carousel">
          <Carousel />
        </div>
        <h1 className="title_Short">SHORTS</h1>
        <div className="container_Short">
          <Carousel2 />
        </div>
        <h1 className="title_Category_Animal">CATEGORY ANIMALS</h1>
        <div className="container_Carousel2">
          <Carousel />
        </div>
        <div className="container_Carousel3">
          <h1 className="title_Category_Food">CATEGORY FOOD</h1>
          <Carousel />
        </div>
      </div>
    </main>
  );
}

export default Home;
