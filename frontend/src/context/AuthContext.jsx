import { createContext, useState, useMemo } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const auth = useMemo(() => ({ user, setUser }), [user]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default authContext;
export { AuthProvider };
