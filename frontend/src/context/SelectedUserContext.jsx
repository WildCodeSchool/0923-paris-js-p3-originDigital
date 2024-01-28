import { createContext, useState, useMemo, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const selectedUserContext = createContext();

function SelectedUserProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSelectedUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const user = await response.json();
          setSelectedUser(user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSelectedUser();
  }, []);

  const auth = useMemo(
    () => ({ selectedUser, setSelectedUser }),
    [selectedUser]
  );

  return (
    <selectedUserContext.Provider value={auth}>
      {children}
    </selectedUserContext.Provider>
  );
}

const useSelectedUser = () => useContext(selectedUserContext);
export default useSelectedUser;
export { SelectedUserProvider };
