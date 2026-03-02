import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const isRegisteredUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!isRegisteredUser) {
      alert("invalid credential");
      return;
    }
    login(isRegisteredUser);

    navigate("/");
  };

  return (
<div className="auth-wrapper">
  <div className="auth-card">
    <h2 className="auth-title">Login</h2>

    <form onSubmit={handleSubmit} className="auth-form">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input"
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />

      <button type="submit" className="auth-btn">
        Login
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;
