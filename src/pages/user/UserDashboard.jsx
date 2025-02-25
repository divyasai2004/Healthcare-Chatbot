import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome, User! Here you can chat with the chatbot, book appointments, and check health tips.</p>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
