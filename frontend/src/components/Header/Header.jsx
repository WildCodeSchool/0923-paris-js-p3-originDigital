import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {};
  return (
    <main className="header">
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
    </main>
  );
}

export default Header;
