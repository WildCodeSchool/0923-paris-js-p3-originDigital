import { createContext, useContext, useState, useMemo } from "react";

const OverviewContext = createContext();

export function OverviewProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [videoStats, setVideoStats] = useState([]);
  const [topTrend, setTopTrend] = useState([]);
  const [topCategory, setTopCategory] = useState([]);

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
    }),
    [isAdmin, isRegistered, videoStats, topTrend, topCategory]
  );

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

const useOverview = () => useContext(OverviewContext);
export default useOverview;
