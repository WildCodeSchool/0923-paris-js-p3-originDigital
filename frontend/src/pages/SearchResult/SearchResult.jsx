import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchResult.css";
import VideoCard from "../../components/Videocard/VideoCard";
import Header from "../../components/Header/Header";
import useOverview from "../../context/Overviewcontext";

function SearchResult() {
  const [searchResultList, setSearchResultList] = useState([]);
  const { searchTerm, setSearchTerm } = useOverview();
  const { searchValue } = useParams();
  console.info(searchTerm);
  setSearchTerm(searchValue);
  useEffect(() => {
    const loadSearchResult = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/videos/search?videoTitle=${searchTerm}&catName=${searchTerm}&tagName=${searchTerm}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response === 200) {
          const videos = await response.json();
          setSearchResultList(videos);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadSearchResult();
  }, []);

  return (
    <>
      <Header />
      <div className="searched_Text_Container">
        <p>You searched for {searchValue}</p>
      </div>
      <section className="search_Result_Section">
        {searchResultList.map((video) => (
          <VideoCard
            key={video.video_id}
            videoId={video.video_id}
            videoUserId={video.user_id}
            videoUsername={video.username}
            videoTitle={video.title}
            videoThumbnail={video.thumbnail}
            videoDate={video.date_publication}
            videoViews={video.views}
            onDeleteVideo={undefined}
            showVideoIcon={false}
          />
        ))}
      </section>
    </>
  );
}
export default SearchResult;
