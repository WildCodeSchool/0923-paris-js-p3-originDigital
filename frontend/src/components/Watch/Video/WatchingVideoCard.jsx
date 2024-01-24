import { useState, useEffect, useRef } from "react";
import "./WatchingVideoCard.css";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import follow from "../../../assets/follow.png";
import unfollow from "../../../assets/unfollow.png";
import Modal from "../../Modal/Modal";
import useOverview from "../../../context/Overviewcontext";

function VideoCard() {
  const { isFollowed, setIsFollowed } = useOverview();
  const [openVideoOptions, setOpenVideoOptions] = useState(false);
  const videoOptionsMenuRef = useRef();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!videoOptionsMenuRef.current.contains(e.target)) {
        setOpenVideoOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="watch_Video_Card">
      <img
        className="watch_Video_Thumbnail"
        alt="watch video"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="flex_Watch_Video_Info">
        <div className="avatar_Container_Watch">
          <Avatar
            className="avatar"
            sx={{ width: 35, height: 35 }}
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p className="creator_Username_Watch">Xoxoxoxo45</p>
        </div>
        <div className="view_Icon_Watch_Bloc">
          <Icon
            icon="lets-icons:view-alt-fill"
            className="view_Icon_Watch"
            alt="View Icon Number"
            width="38"
            height="38"
          />
          <span>100 K</span>
        </div>
        <div className="like_Icon_Watch_Bloc">
          <Icon
            icon="ph:heart"
            className="like_Icon_Watch"
            alt="Like Icon Number"
            width="38"
            height="38"
          />
          <span>254</span>
        </div>
        <div className="favorite_Icon_Watch_Bloc">
          <Icon
            icon="pepicons-pencil:star"
            className="favorite_Icon_Watch"
            alt="Favorite Icon"
            width="40"
            height="40"
          />
        </div>
        <div
          className="simple-line-icons:user-following "
          tabIndex="-17"
          role="button"
          onClick={handleFollowClick}
          onKeyDown={handleFollowClick}
        >
          <img
            src={isFollowed ? unfollow : follow}
            className="follow_Icon_Watch"
            alt="Follow Icon"
          />
        </div>
        <div
          className={`moreVert_Icon_Container_Watch ${
            openVideoOptions ? "active" : "inactive"
          }`}
          ref={videoOptionsMenuRef}
        >
          <Icon
            id="icon_More_Vertical"
            type="button"
            icon="pepicons-pop:dots-y"
            color="#f3f3e6"
            width="37"
            height="37"
            onClick={() => {
              setOpenVideoOptions(!openVideoOptions);
            }}
          />

          <div
            className={`dropdown_Menu ${
              openVideoOptions ? "active" : "inactive"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setOpenVideoOptions(false);
              }}
            >
              <ul>Edit video</ul>
            </button>
            <button
              type="button"
              onClick={() => {
                setOpenModal(true);
                setOpenVideoOptions(false);
              }}
            >
              <ul>Delete video</ul>
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal onClose={handleClose}>
          <div className="modal_Content">
            <h1>Are you sure you want to delete this video? </h1>
          </div>
          <div className="modal_Footer">
            <button
              type="button"
              className="modal_Btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="modal_Btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              NO
            </button>
          </div>
        </Modal>
      )}
      <div className="watch_Video_Data">
        <div className="data_Container_Watch">
          <div className="channel_Details_Watch">
            <h3 className="video_Title_Watch">Le chat sympa !</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
