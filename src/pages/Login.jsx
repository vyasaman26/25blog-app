import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    console.log(typeof users);
    console.log(users);
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
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
