import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Register user</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          placeholder="enter username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Register user</button>
      </form>
    </div>
  );
};

export default Register;
