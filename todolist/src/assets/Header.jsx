import React from "react";
import sunMoonImage from "../images/hollowsunmoon.png";
import "../style/Header.css";

function Header() {
  return (
    <header>
      <img src={sunMoonImage} alt="Sun and Moon" />
    </header>
  );
}

export default Header;
