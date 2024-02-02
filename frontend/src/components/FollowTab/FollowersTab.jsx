import React, { useState, useEffect } from "react";
import Subcard from "../SubCard/SubCard";
import useSelectedUser from "../../context/SelectedUserContext";

function FollowersTab() {
  const [followers, setFollowers] = useState([]);
  const { selectedUser } = useSelectedUser();

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${
            selectedUser?.user_id
          }/followers`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const followersData = await response.json();
          setFollowers(followersData);
        } else {
          console.error("Erreur lors de la récupération des followers.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <div className="container_Sub">
      {followers.map((follower) => (
        <Subcard key={follower.id} follower={follower} />
      ))}
    </div>
  );
}

export default FollowersTab;
