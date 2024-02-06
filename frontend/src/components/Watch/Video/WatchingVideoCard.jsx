import ReactPlayer from "react-player";
import { React, useState, useEffect, useRef } from "react";
import "./WatchingVideoCard.css";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import video from "../../../../../backend/public/upload/1706026627893.0.6409657439334755.VID-20231009-WA0012_1.mp4";
import follow from "../../../assets/follow.png";
import unfollow from "../../../assets/unfollow.png";
import Modal from "../../Modal/Modal";
import useOverview from "../../../context/Overviewcontext";

function VideoCard() {
  const { isFollowed, setIsFollowed } = useOverview();
  const [openVideoOptions, setOpenVideoOptions] = useState(false);
  const videoOptionsMenuRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const isMobile = window.innerWidth < 1024;
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
    <>
      {isMobile ? (
        <ReactPlayer controls url={video} height={380} width="100%" />
      ) : (
        <ReactPlayer controls url={video} height={543} width={966} />
      )}
      <div className="watch_Video_Card">
        <div className="flex_Watch_Video_Info">
          {!isMobile && (
            <div className="avatar_Container_Watch">
              <Avatar
                className="avatar"
                sx={{ width: 35, height: 35 }}
                src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <p className="creator_Username_Watch">Xoxoxoxo45</p>
            </div>
          )}
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
            <div className="like_Icon_Watch_Bloc">
              {isLiked ? (
                <Icon
                  icon="ph:heart-fill"
                  color="var(--white)"
                  className="like_Icon_Watch"
                  alt="Like Icon Number"
                  width="38"
                  height="38"
                  onClick={() => setIsLiked(false)}
                />
              ) : (
                <Icon
                  icon="ph:heart"
                  className="like_Icon_Watch"
                  alt="Like Icon Number"
                  width="38"
                  height="38"
                  onClick={() => setIsLiked(true)}
                />
              )}
              <span>254</span>
            </div>
          </div>
          <div className="favorite_Icon_Watch_Bloc">
            {isFavorite ? (
              <Icon
                icon="teenyicons:star-solid"
                className="favorite_Icon_Watch"
                alt="Favorite Icon"
                width="34"
                height="34"
                onClick={() => setIsFavorite(false)}
              />
            ) : (
              <Icon
                icon="teenyicons:star-outline"
                color="var(---white)"
                className="favorite_Icon_Watch"
                alt="Favorite Icon"
                width="34"
                height="34"
                onClick={() => setIsFavorite(true)}
              />
            )}
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
                className="video_dropdown_Btn"
                type="button"
                onClick={() => {
                  setOpenVideoOptions(false);
                }}
              >
                <ul>Edit video</ul>
              </button>
              <button
                className="video_dropdown_Btn"
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
            {isMobile && (
              <div className="avatar_Container_Watch_Mobile">
                <Avatar
                  className="avatar"
                  sx={{ width: 35, height: 35 }}
                  src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <p className="creator_Username_Watch">Xoxoxoxo45</p>
              </div>
            )}
            <div className="channel_Details_Watch">
              <h3 className="video_Title_Watch">Le chat sympa !</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
