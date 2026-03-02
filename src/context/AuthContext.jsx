import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    const fakeToken = "jwt-token" + Date.now();

    setToken(fakeToken);
    setUser(userData);

    localStorage.setItem("token", fakeToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
