import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Header.css";

function Header() {
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {};
  return (
    <main className="header">
      <div className="container_Logo">
        <img id="logo_sign" src="src/assets/logoprin.png" alt="" />
      </div>
      <div className="container_search">
        <input
          className="input_search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Icon
          id="icon_search"
          type="button"
          onClick={handleSearch}
          icon="iconoir:search"
          color="#f3f3e6"
          width="50"
          height="50"
        />
      </div>
      <Icon
        id="icon_sign"
        icon="ph:user-circle-thin"
        color="#f3f3e6"
        width="90"
        height="90"
        onClick={() => {
          Navigate("/usersprofile/:id");
        }}
      />
    </main>
  );
}

export default Header;
