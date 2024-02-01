import { useEffect, useState } from "react";
import "./SearchResult.css";
import VideoCard from "../../components/Videocard/VideoCard";
import Header from "../../components/Header/Header";
import useOverview from "../../context/Overviewcontext";

function SearchResult() {
  const [searchResultList, setSearchResultList] = useState([]);
  const { searchTerm } = useOverview();
  console.info(searchTerm);
  // console.log("search result list", searchResultList);
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
        if (response.status === 200) {
          const videos = await response.json();
          console.info(videos);
          setSearchResultList(videos);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadSearchResult();
  }, []);

  let resultText = "";

  if (searchResultList.length === 0) {
    resultText = `No results found for '${searchTerm}'`;
  } else if (searchResultList.length === 1) {
    resultText = `1 result for '${searchTerm}'`;
  } else {
    resultText = `${searchResultList.length} results for '${searchTerm}'`;
  }
  return (
    <>
      <Header />
      <div className="searched_Text_Container">
        <p>{resultText}</p>
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
