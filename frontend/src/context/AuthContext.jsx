import { createContext, useState, useMemo, useEffect } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response === 200) {
          const currentUser = await response.json();
          setUser(currentUser);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCurrentUser();
  }, []);

  const auth = useMemo(() => ({ user, setUser }), [user]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default authContext;
export { AuthProvider };
