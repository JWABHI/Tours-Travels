import React, { useState } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked({ clicked: !clicked });
  };
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">JOURNEY</h1>
      <div className="menu-icon" onClick={handleClicked}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.className} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
