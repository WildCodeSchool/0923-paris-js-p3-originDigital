import React, { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import useOverview from "../../context/Overviewcontext";
import authContext from "../../context/AuthContext";
import imageSign from "../../assets/logo_Mobile.svg";

function Header() {
  const Navigate = useNavigate();
  const { setToggleNavbarDestkop } = useOverview();
  const [searchTerm, setSearchTerm] = useState("");
  const auth = useContext(authContext);

  console.info("current user", auth.user);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {};
  const handleNavbarClick = (e) => {
    e.stopPropagation();
    setToggleNavbarDestkop(true);
  };
  const handleLogoClick = () => {
    Navigate("/");
  };

  return (
    <main className={auth.user ? "header" : "header-unregistered"}>
      <div
        className="container_Logo"
        onClick={handleLogoClick}
        onKeyDown={handleLogoClick}
        role="button"
        tabIndex="0"
      >
        <img id="logo_Sign" src={imageSign} alt="Logo Overview" />
      </div>
      <div className="container_Search">
        <input
          className="input_Search"
          type="text"
          placeholder="SEARCH"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Icon
          id="icon_Search"
          type="button"
          onClick={handleSearch}
          icon="iconoir:search"
          color="#f3f3e6"
          width="50"
          height="50"
        />
      </div>
      {auth.user ? (
        <div className="user_Profile_Container">
          <Icon
            id="icon_Sign"
            icon="ph:user-circle-thin"
            color="#f3f3e6"
            width="78"
            height="78"
            onClick={handleNavbarClick}
          />
        </div>
      ) : (
        <button
          type="button"
          className="logIn_Btn"
          onClick={() => Navigate("/login")}
        >
          Log In
        </button>
      )}
    </main>
  );
}

export default Header;
