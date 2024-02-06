import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import useSelectedUser from "../../../context/SelectedUserContext";
import BackgroundLetterAvatars from "../../Avatar/Avatar";
import Modal from "../../Modal/Modal";
import "./SubCard.css";

function SubCard() {
  const [openModal, setOpenModal] = useState(false);
  const { selectedUser } = useSelectedUser();
  const subOptionsMenuRef = useRef();
  const [openSubOptions, setOpenSubOptions] = useState(false);

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
      <BackgroundLetterAvatars
        sx={{ width: 40, height: 40 }}
        username={selectedUser?.username}
        // imgsrc={selectedUser.avatar}
      />
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
