import React, { useContext } from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
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
          {token && (
            <button className="nav-link logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
           {!token && (
            <>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
