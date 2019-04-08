import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-wrapper">
      <NavLink to="/" activeClassName="">
        Our Village
      </NavLink>
      <NavLink to="/smurf-form" activeClassName="">
        A new smurf is coming!!!!
      </NavLink>
    </header>
  );
};

export default NavBar;
