import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? ">" : "☰"}
      </button>

      <h2>{role === "admin" ? "Admin Dashboard" : "User Dashboard"}</h2>

      <ul className="sidebar-menu">
        {role === "admin" ? (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/manage-users">Manage Users</Link></li>
            <li><Link to="/admin/reports">Reports</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/user/dashboard">Dashboard</Link></li>
            <li><Link to="/user/chatbot">Chatbot</Link></li>
            <li><Link to="/user/history">Chat History</Link></li>
          </>
        )}
        
      </ul>
    </div>
  );
};

export default Sidebar;
