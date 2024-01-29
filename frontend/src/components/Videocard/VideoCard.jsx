import { useState, useEffect, useRef } from "react";
import TimeAgo from "react-timeago";
import "./VideoCard.css";
import { Icon } from "@iconify/react";
import Modal from "../Modal/Modal";
import useSelectedUser from "../../context/SelectedUserContext";
import BackgroundLetterAvatars from "../Avatar/Avatar";

function VideoCard({ videoId, videoViews }) {
  const [openVideoOptions, setOpenVideoOptions] = useState(false);
  const { selectedUser } = useSelectedUser();
  const videoOptionsMenuRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoUsername, setVideoUsername] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const getVideoById = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const video = await response.json();
          setVideoDetails(video);
        }
      } catch (error) {
        console.error(error);
      }
      return true;
    };
    getVideoById();
  }, [videoId]);

  useEffect(() => {
    const getUsernameById = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${videoDetails?.user_id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const result = await response.json();
          setVideoUsername(result.username);
        }
        return videoUsername;
      } catch (error) {
        console.error(error);
      }
      return true;
    };
    getUsernameById();
  }, [videoDetails?.user_id, selectedUser]);

  const handleDeleteVideo = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.status === 204) {
        window.location.reload(false);
      }
    } catch (error) {
      console.error(error);
    }
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
    <div className="video_Card">
      <div className="thumbnail_Container">
        <img
          className="video_Thumbnail"
          alt="video thumbnail"
          src={videoDetails?.thumbnail}
        />
      </div>
      <div
        className={`moreVert_Icon_Container ${
          openVideoOptions ? "active" : "inactive"
        }`}
        ref={videoOptionsMenuRef}
      >
        <div
          className="video_Card_Icon_Wrapper"
          onClick={() => {
            setOpenVideoOptions(!openVideoOptions);
          }}
          onKeyDown={() => {
            setOpenVideoOptions(!openVideoOptions);
          }}
          role="button"
          tabIndex={0}
          aria-label="Open video options"
        >
          <Icon
            id="icon_More_Vertical"
            type="button"
            icon="pepicons-pop:dots-y"
            color="#f3f3e6"
            width="35"
            height="35"
          />
        </div>

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
            <ul>Edit video details</ul>
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
      <div className="video_Data">
        <div className="data_Container">
          <div className="avatar_Container">
            <BackgroundLetterAvatars
              // className="avatar"
              sx={{ width: 40, height: 40 }}
              username={videoUsername}
            />
            {/* <Avatar
              className="avatar"
              sx={{ width: 40, height: 40 }}
              src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            /> */}
          </div>
          <div className="channel_Details">
            <h3 className="video_Title">{videoDetails?.title}</h3>
            <p className="creator_Username">{videoUsername}</p>
            <p>
              {videoViews} views &bull;{" "}
              <TimeAgo date={videoDetails?.date_publication} minPeriod={60} />
            </p>
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
                handleDeleteVideo();
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
    </div>
  );
}

export default VideoCard;
