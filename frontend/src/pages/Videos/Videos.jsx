import Description from "../../components/Description/Description";
import Header from "../../components/Header/Header";
import WatchingVideoCard from "../../components/Watch/Video/WatchingVideoCard";
import "./Video.css";

function Videos() {
  return (
    <main>
      <Header />
      <div className="containeur_Body_Video">
        <WatchingVideoCard />
        <Description />
      </div>
    </main>
  );
}

export default Videos;
