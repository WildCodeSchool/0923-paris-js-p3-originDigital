import React, { useState, useEffect } from "react";
import Subcard from "../SubCard/SubCard";

function FollowersTab() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/follower/:userId`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
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
