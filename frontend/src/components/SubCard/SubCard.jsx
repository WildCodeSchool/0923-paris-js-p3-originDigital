import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Avatar from "@mui/material/Avatar";
import Modal from "../Modal/Modal";
import "./SubCard.css";

function SubCard() {
  const [openModal, setOpenModal] = useState(false);
  const subOptionsMenuRef = useRef();
  const [openSubOptions, setOpenSubOptions] = useState(false);
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const users = await response.json();

        const usersWithUsername = users.map((user) => ({
          id: user.id,
          username: user.username,
        }));

        setUsernames(usersWithUsername);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données :",
          error.message
        );
      }
    };

    fetchData();
  }, []);
  const handleClose = () => {
    setOpenModal(false);
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
      <Avatar
        className="avatar"
        sx={{ width: 60, height: 50 }}
        src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ul>
        {usernames.map((user) => (
          <li key={user.id} className="user_Sub">
            {user.username}
          </li>
        ))}
      </ul>
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
          <button
            type="button"
            onClick={() => {
              setOpenSubOptions(false);
            }}
          >
            <p>Unfollow account</p>
          </button>
        </div>
        {openModal && (
          <Modal onClose={handleClose}>
            <div className="modal_Content">
              <h1>Are you sure you want to delete this Follower? </h1>
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
      </div>
    </div>
  );
}

export default SubCard;
