import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";

const RoleSelection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // FIX: Use sessionStorage instead of localStorage
    const isLoggedIn = sessionStorage.getItem("user");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const selectRole = (role) => {
    sessionStorage.setItem("userRole", role);
    navigate(role === "admin" ? "/admin-dashboard" : "/user-dashboard");
  };

  return (
    <div className="role-container">
      <h1>Select Your Role</h1>
      <p>Choose how you want to use the platform.</p>
      <div className="role-buttons">
        <button className="admin-btn" onClick={() => selectRole("admin")}>
          Admin Panel
        </button>
        <button className="user-btn" onClick={() => selectRole("user")}>
          User Dashboard
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
