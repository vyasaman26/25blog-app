import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../style/Navbar.css'
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {logout}=useContext(AuthContext)
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
      <p className="nav-link" onClick={logout}>Logout</p>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
