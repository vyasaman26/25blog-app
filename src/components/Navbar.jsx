import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Navbar.css'

const Navbar = () => {
  return (
   <nav className="navbar">
  <div className="nav-container">
    <h2 className="logo">BlogSpace</h2>

    <div className="nav-links">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/create" className="nav-link">
        Create
      </NavLink>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
