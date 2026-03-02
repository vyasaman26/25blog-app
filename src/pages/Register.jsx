import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExist = users.find((u) => u.email === email);
    if (userExist) {
      alert("user with this email already exist");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("registered successfully");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
  <div className="auth-card">
    <h2 className="auth-title">Register</h2>

    <form onSubmit={handleRegister} className="auth-form">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="auth-input"
      />

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
        Register
      </button>
    </form>
  </div>
</div>
  );
};

export default Register;
