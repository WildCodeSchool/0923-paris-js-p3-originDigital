import { createContext, useState, useMemo, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

const selectedUserContext = createContext();

function SelectedUserProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

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
        } else {
          navigate("/*");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSelectedUser();
  }, [id]);

  useEffect(() => {
    const isFollowedByCurrentUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${id}/isFollowing`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) setIsFollowed(true);
        else setIsFollowed(false);
      } catch (error) {
        console.error(error);
      }
    };
    isFollowedByCurrentUser();
  }, [id]);

  const auth = useMemo(
    () => ({ selectedUser, setSelectedUser, isFollowed, setIsFollowed }),
    [selectedUser, isFollowed]
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
