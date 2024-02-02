import React, { useState, useEffect } from "react";
import Subcard from "../SubCard/SubCard";
import useSelectedUser from "../../context/SelectedUserContext";

function FollowingTab() {
  const [followeds, setFollowed] = useState([]);
  const { selectedUser } = useSelectedUser();

  useEffect(() => {
    const fetchFollowed = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${
            selectedUser?.user_id
          }/followed`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const followedData = await response.json();
          setFollowed(followedData);
        } else {
          console.error("Erreur lors de la récupération des followed.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchFollowed();
  }, []);

  return (
    <div className="container_Sub">
      {followeds.map((followed) => (
        <Subcard key={followed.id} followed={followed} />
      ))}
    </div>
  );
}

export default FollowingTab;
