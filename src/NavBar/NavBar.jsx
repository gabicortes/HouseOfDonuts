import React from "react";
import "./NavBar.css";
import logo from "./Logo.png";

function NavBar() {
  return (
    <div id="navbar" className="navBarDiv">
      <img className="logoImage" src={logo} alt="logo" />
      <div className="buttonsNavBar">
        <span className="buttonNavBar">Boton 1</span>
        <span className="buttonNavBar">Boton 2</span>
      </div>
    </div>
  );
}

export { NavBar };
