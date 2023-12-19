import { createContext, useContext, useState, useMemo } from "react";

const OverviewContext = createContext();

export function OverviewProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const value = useMemo(
    () => ({
      isAdmin,
      setIsAdmin,
    }),
    [isAdmin]
  );

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

const useOverview = () => useContext(OverviewContext);
export default useOverview;
