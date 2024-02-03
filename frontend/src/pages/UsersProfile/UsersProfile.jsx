import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Header from "../../components/Header/Header";
import "./UsersProfile.css";
import VideoCard from "../../components/Videocard/VideoCard";
import BackgroundLetterAvatars from "../../components/Avatar/Avatar";
import authContext from "../../context/AuthContext";
import useSelectedUser from "../../context/SelectedUserContext";
import Modal from "../../components/Modal/Modal";

function UserProfile() {
  const auth = useContext(authContext);
  const { isFollowed, setIsFollowed } = useSelectedUser();
  const { selectedUser, setSelectedUser } = useSelectedUser();
  const [openUserSettings, setOpenUserSettings] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const navigate = useNavigate();
  const settingsMenuRef = useRef();
  const [isEditingUserDescription, setIsEditingUserDescription] =
    useState(false);
  const inputRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [userVideos, setUserVideos] = useState([]);

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const loadUserVideos = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${
            selectedUser?.user_id
          }/videos`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const videos = await response.json();
          setUserVideos(videos);
        }
        return userVideos;
      } catch (error) {
        console.error(error);
      }
      return true;
    };
    loadUserVideos();
  }, [selectedUser]);

  const logOut = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/logOut`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.status === 200) {
        auth.setUser(null);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [newUsername, setNewUsername] = useState(auth?.user?.username);
  const [newUserDescription, setNewUserDescription] = useState(
    auth?.user?.channel_description
  );
  const [newUserAvatar, setNewUserAvatar] = useState(auth?.user?.avatar);
  // console.log("current cat", auth?.user?.user_id);
  // console.log("selected cat", selectedUser?.user_id)

  // useEffect(() => {
  //   console.info("user", auth.user);
  // }, [auth.user]);

  // useEffect(() => {
  //   console.info("selected", selectedUser);
  // }, [selectedUser]);

  // useEffect(() => {
  //   console.info("userVideos", userVideos);
  // }, [userVideos]);

  const handleEditUsername = () => {
    setIsEditingUsername(true);
    setNewUsername(auth?.user?.username);
    setOpenUserSettings(false);
  };

  const handleEditUserDescription = () => {
    setIsEditingUserDescription(true);
    setNewUserDescription(auth?.user?.channel_description);
    setOpenUserSettings(false);
  };

  const handleEditUserAvatar = (e) => {
    setIsEditingUserDescription(true);
    setOpenUserSettings(false);
    setNewUserAvatar(e.target.files[0]);
  };

  useEffect(() => {
    const handleSaveNewUserAvatar = async () => {
      try {
        const form = new FormData();
        form.append("avatar", newUserAvatar);
        const response = fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${selectedUser?.user_id}`,
          {
            method: "PUT",
            credentials: "include",
            body: form,
          }
        );
        if (response.status === 200) {
          const userInfo = await response.json();
          setNewUserAvatar(userInfo.avatar);
          auth.setUser((prevUser) => ({
            ...prevUser,
            avatar: userInfo.avatar,
          }));

          setSelectedUser((prevUser) => ({
            ...prevUser,
            avatar: userInfo.avatar,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };
    handleSaveNewUserAvatar();
  }, [newUserAvatar]);

  const handleSaveUsername = async () => {
    if (newUsername.trim() !== "") {
      auth.setUser((prevUser) => ({
        ...prevUser,
        username: newUsername,
      }));
      setIsEditingUsername(false);
    } else {
      alert("Username cannot be empty!");
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${selectedUser?.user_id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: newUsername,
          }),
        }
      );
      if (response.status === 200) {
        const userInfo = await response.json();
        setNewUsername(userInfo.username);
        auth.setUser((prevUser) => ({
          ...prevUser,
          username: userInfo.username,
        }));

        setSelectedUser((prevUser) => ({
          ...prevUser,
          username: userInfo.username,
        }));
      }
      return newUsername;
    } catch (error) {
      console.error(error);
    }
    return true;
  };

  const handleSaveUserDescription = async () => {
    if (newUserDescription.trim() !== "") {
      auth.setUser((prevUser) => ({
        ...prevUser,
        description: newUserDescription,
      }));
      setIsEditingUserDescription(false);
    } else {
      alert("Description cannot be empty!");
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${selectedUser?.user_id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            channel_description: newUserDescription,
          }),
        }
      );
      if (response.status === 200) {
        const userInfo = await response.json();
        setNewUserDescription(userInfo.channel_description);
        auth.setUser((prevUser) => ({
          ...prevUser,
          channel_description: userInfo.channel_description,
        }));

        setSelectedUser((prevUser) => ({
          ...prevUser,
          channel_description: userInfo.channel_description,
        }));
      }
      return newUserDescription;
    } catch (error) {
      console.error(error);
    }
    return true;
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${selectedUser?.user_id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.status === 204) {
        auth.setUser(null);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteVideoFromState = (deletedVideoId) => {
    // Remove the deleted video from the state
    setUserVideos((prevVideos) =>
      prevVideos.filter((video) => video.video_id !== deletedVideoId)
    );
  };

  useEffect(() => {
    auth.setUser((prevUser) => ({
      ...prevUser,
      username: newUsername,
    }));
  }, [newUsername, auth.setUser]);

  useEffect(() => {
    auth.setUser((prevUser) => ({
      ...prevUser,
      description: newUserDescription,
    }));
  }, [newUserDescription, auth.setUser]);

  useEffect(() => {
    if (isEditingUsername && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditingUsername]);

  useEffect(() => {
    if (isEditingUserDescription && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditingUserDescription]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!settingsMenuRef.current.contains(e.target)) {
        setOpenUserSettings(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFollowClick = async () => {
    if (!isFollowed) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/${
            selectedUser?.user_id
          }/follow`,
          {
            method: "POST",
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
        if (response.status === 204) setIsFollowed(true);
      } catch (error) {
        console.error(error);
      }
    } else {
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
    }
  };

  return (
    <>
      <Header />
      <section className="container_Body_User_Profile">
        <section className="user_Info_Container">
          <div className="img_And_Username_And_Settings_Container">
            <div className="img_And_Username_Container">
              <div className="user_Profile_Img_Container">
                {selectedUser?.username ? (
                  <BackgroundLetterAvatars
                    // sx={{ width: 60, height: 60 }}
                    width={70}
                    height={70}
                    username={selectedUser?.username}
                    imgsrc={selectedUser.avatar}
                  />
                ) : null}
              </div>
              <div className="username_Container">
                {isEditingUsername ? (
                  <div className="input_Container">
                    <input
                      className="edit_Input"
                      type="text"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      ref={inputRef}
                      required
                    />
                    <button
                      className="save_New_Data_Btn"
                      type="button"
                      onClick={handleSaveUsername}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <h1 className="username">{selectedUser?.username}</h1>
                )}
              </div>
            </div>

            {auth?.user?.user_id === selectedUser?.user_id ? (
              <div className="settings_General_Wrapper">
                <div
                  className={`settings_Container ${
                    openUserSettings ? "active" : "inactive"
                  }`}
                  ref={settingsMenuRef}
                >
                  <div
                    className="icon_Settings_Container"
                    onClick={() => {
                      setOpenUserSettings(!openUserSettings);
                    }}
                    onKeyDown={() => {
                      setOpenUserSettings(!openUserSettings);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle User Settings"
                  >
                    <Icon
                      id="icon_Settings"
                      type="button"
                      icon="material-symbols:settings"
                      color="#f3f3e6"
                      width="35"
                      height="35"
                    />
                  </div>
                  <div
                    className={`dropdown_Settings ${
                      openUserSettings ? "active" : "inactive"
                    }`}
                  >
                    <button onClick={logOut} type="button">
                      <ul>Disconnect</ul>
                    </button>
                    <button onClick={handleEditUsername} type="button">
                      <ul>Edit username</ul>
                    </button>
                    <button type="button" onClick={handleEditUserAvatar}>
                      <ul>Edit profile picture</ul>
                    </button>
                    <button onClick={handleEditUserDescription} type="button">
                      <ul>Edit profile description</ul>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenModal(true);
                        setOpenUserSettings(false);
                      }}
                    >
                      <ul>Delete account</ul>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="follow_Btn_Container">
                <button
                  type="button"
                  className={
                    isFollowed ? "follow_Btn inactive" : "follow_Btn active"
                  }
                  onClick={handleFollowClick}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </button>
              </div>
            )}
          </div>
          <div className="user_Description_Container">
            {isEditingUserDescription ? (
              <div className="input_Container">
                <input
                  className="edit_Input"
                  type="text"
                  value={newUserDescription}
                  onChange={(e) => setNewUserDescription(e.target.value)}
                  ref={inputRef}
                  required
                />
                <button
                  className="save_New_Data_Btn"
                  type="button"
                  onClick={handleSaveUserDescription}
                >
                  Save
                </button>
              </div>
            ) : (
              <h2 className="user_Description">
                {selectedUser?.channel_description}
              </h2>
            )}
          </div>
        </section>
        <section className="video_Section">
          {userVideos.map((video) => (
            <VideoCard
              key={video.video_id}
              videoId={video.video_id}
              videoUserId={video.user_id}
              videoUsername={video.username}
              videoTitle={video.title}
              videoThumbnail={video.thumbnail}
              videoDate={video.date_publication}
              videoViews={video.views}
              onDeleteVideo={handleDeleteVideoFromState}
              showVideoIcon={auth?.user?.user_id === selectedUser?.user_id}
            />
          ))}
        </section>
        {openModal && (
          <Modal onClose={handleClose}>
            <div className="modal_Content">
              <h1>Are you sure you want to delete your account? </h1>
            </div>
            <div className="modal_Footer">
              <button
                type="button"
                className="modal_Btn"
                onClick={() => {
                  setOpenModal(false);
                  handleDeleteAccount();
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
      </section>
    </>
  );
}

export default UserProfile;
