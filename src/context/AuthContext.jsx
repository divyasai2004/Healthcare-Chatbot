// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Replace with real authentication logic
  const [role, setRole] = useState(null); // Replace with real role data

  const login = (userInfo, userRole) => {
    setUser(userInfo);
    setRole(userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
