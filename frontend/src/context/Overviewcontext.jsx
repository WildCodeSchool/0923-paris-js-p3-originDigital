import { createContext, useContext, useState, useMemo } from "react";

const OverviewContext = createContext();

export function OverviewProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const [videoStats, setVideoStats] = useState([]);
  const [topTrend, setTopTrend] = useState([]);
  const [topCategory, setTopCategory] = useState([]);
  const [toggleNavbarDesktop, setToggleNavbarDestkop] = useState(true);

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
