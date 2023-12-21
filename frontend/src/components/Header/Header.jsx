import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Header.css";
import useOverview from "../../context/Overviewcontext";
import imageSign from "../../assets/logo_Mobile.svg";

function Header() {
  const { setToggleNavbarDestkop } = useOverview();
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {};
  const handleNavbarClick = (e) => {
    e.stopPropagation();
    setToggleNavbarDestkop(true);
  };

  return (
    <main className="header">
      <div className="container_Logo">
        <img id="logo_Sign" src={imageSign} alt="" />
      </div>
      <div className="container_Search">
        <input
          className="input_Search"
          type="text"
          placeholder="Search..."
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
    </main>
  );
}

export default Header;
