import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getStoredUser = () => {
    try {
      const storedUser = sessionStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing stored user data:", error);
      sessionStorage.removeItem("user"); // Remove invalid data
      return null;
    }
  };

  const getStoredRole = () => {
    return sessionStorage.getItem("userRole") || "user"; // Default to "user"
  };

  const [user, setUser] = useState(getStoredUser);
  const [role, setRole] = useState(getStoredRole);

  const login = (userInfo, userRole) => {
    if (!userInfo || !userRole) {
      console.error("Invalid login data");
      return;
    }

    setUser(userInfo);
    setRole(userRole);

    sessionStorage.setItem("user", JSON.stringify(userInfo));
    sessionStorage.setItem("userRole", userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// // src/context/AuthContext.jsx
// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
//   const [role, setRole] = useState(() => localStorage.getItem("role") || null);

//   const login = (userInfo, userRole) => {
//     setUser(userInfo);
//     setRole(userRole);

//     localStorage.setItem("user", JSON.stringify(userInfo));
//     localStorage.setItem("role", userRole);
//   };

//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     localStorage.removeItem("user");
//     localStorage.removeItem("role");
//   };

//   return <AuthContext.Provider value={{ user, role, login, logout }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);
