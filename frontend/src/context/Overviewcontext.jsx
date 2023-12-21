import { createContext, useContext, useState, useMemo } from "react";

const OverviewContext = createContext();

export function OverviewProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");

  const value = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
      videoTitle,
      setVideoTitle,
      description,
      setDescription,
    }),
    [isAdmin, videoTitle, description]
  );

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

const useOverview = () => useContext(OverviewContext);
export default useOverview;
