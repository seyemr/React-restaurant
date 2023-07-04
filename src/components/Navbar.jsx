import React from "react";
import Logo from "../assets/hamburgerlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide d-flex align-items-center gap-2">
        <img src={Logo} />
         <h1 className="text-danger">Burger <span className="text-dark">02</span> </h1>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
