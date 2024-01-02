import { createContext, useContext, useState, useMemo } from "react";

const OverviewContext = createContext();

export function OverviewProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const [videoFile, setVideoFile] = useState(null);
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState([]);
  const [isRegistered, setIsRegistered] = useState(true);

  const [videoStats, setVideoStats] = useState([]);
  const [topTrend, setTopTrend] = useState([]);
  const [topCategory, setTopCategory] = useState([]);
  const [toggleNavbarDesktop, setToggleNavbarDestkop] = useState(false);

  const value = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      isRegistered,
      setIsRegistered,
      videoStats,
      setVideoStats,
      topTrend,
      setTopTrend,
      topCategory,
      setTopCategory,
      toggleNavbarDesktop,
      setToggleNavbarDestkop,
      videoTitle,
      setVideoTitle,
      description,
      setDescription,
      category,
      setCategory,
      tag,
      setTag,
      videoFile,
      setVideoFile,
      videoThumbnail,
      setVideoThumbnail,
    }),
    [
      isAdmin,
      isRegistered,
      videoStats,
      topTrend,
      topCategory,
      toggleNavbarDesktop,
      videoTitle,
      description,
      category,
      tag,
      videoFile,
      videoThumbnail,
    ]
  );

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

const useOverview = () => useContext(OverviewContext);
export default useOverview;
