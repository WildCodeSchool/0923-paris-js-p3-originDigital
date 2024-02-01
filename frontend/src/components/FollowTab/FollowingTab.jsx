import React, { useState, useEffect } from "react";
import Subcard from "../SubCard/SubCard";

function FollowingTab() {
  const [followeds, setFolloweds] = useState([]);

  useEffect(() => {
    const fetchFolloweds = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/followed/:userId`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.status === 200) {
          const followedsData = await response.json();
          setFolloweds(followedsData);
        } else {
          console.error("Erreur lors de la récupération des followeds.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchFolloweds();
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
