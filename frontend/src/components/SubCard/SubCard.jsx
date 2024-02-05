import { useState, useEffect, useRef, useContext } from "react";
import { Icon } from "@iconify/react";
import BackgroundLetterAvatars from "../Avatar/Avatar";
import "./SubCard.css";
import useSelectedUser from "../../context/SelectedUserContext";
import authContext from "../../context/AuthContext";

function SubCard({ username, avatar, followType, onRemoveFollower }) {
  // const [openModal, setOpenModal] = useState(false);
  const subOptionsMenuRef = useRef();
  const auth = useContext(authContext);
  const { selectedUser, setIsFollowed } = useSelectedUser();

  const [openSubOptions, setOpenSubOptions] = useState(false);

  const handleUnfollowClick = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${
          selectedUser?.user_id
        }/unfollow`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            follower_id: auth?.user?.user_id,
            followed_id: selectedUser?.user_id,
          }),
        }
      );
      if (response.status === 204) setIsFollowed(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!subOptionsMenuRef.current.contains(e.target)) {
        setOpenSubOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container_Subcard_In">
      <div className="avatar_And_Username_Container">
        <div className="avatar_container">
          <BackgroundLetterAvatars
            sx={{ width: 40, height: 40 }}
            username={username}
            imgsrc={avatar}
          />
        </div>
        <p className="subCard_Username">{username}</p>
      </div>
      <Icon
        id="icon_More_Vertical"
        type="button"
        icon="pepicons-pop:dots-y"
        color="#f3f3e6"
        width="35"
        height="35"
        onClick={() => {
          setOpenSubOptions(!openSubOptions);
        }}
      />
      <div
        className={`moreVert_Icon_ContainerSub ${
          openSubOptions ? "active" : "inactive"
        }`}
      >
        <div
          className={`dropdown_Menu ${openSubOptions ? "active" : "inactive"}`}
        >
          {followType ? (
            <button
              type="button"
              onClick={() => {
                setOpenSubOptions(false);
                handleUnfollowClick();
                onRemoveFollower();
              }}
            >
              Remove follower
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setOpenSubOptions(false);
                handleUnfollowClick();
              }}
            >
              Unfollow account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubCard;
