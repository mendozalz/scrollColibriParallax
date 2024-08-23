import React, { useState } from "react";
import "../menu.css";

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menuContainer">
      <div className={`hamburguer-menu ${menuOpen ? "change" : ""}`} onClick={toggleMenu}>
        <span className="line first-line"></span>
        <span className="line second-line"></span>
        <span className="line tercer-line"></span>
      </div>
      <div className={`menu-expanded ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Anchor #1</a>
          </li>
          <li>
            <a href="#">Anchor #2</a>
          </li>
          <li>
            <a href="#">Anchor #3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
