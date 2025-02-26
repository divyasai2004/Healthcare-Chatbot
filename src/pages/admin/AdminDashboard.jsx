import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="admin-dashboard">
      {!isSidebarOpen && (
        <button className="menu-toggle open" onClick={() => setIsSidebarOpen(true)}>
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>Admin</h2>
          <button className="menu-toggle close" onClick={() => setIsSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul>
          <li onClick={() => navigate("/admin/manage-users")}>
            <i className="icon-users"></i> Manage Users
          </li>
          <li onClick={() => navigate("/admin/reports")}>
            <i className="icon-reports"></i> View Reports
          </li>
          <li onClick={() => navigate("/admin/settings")}>
            <i className="icon-settings"></i> System Settings
          </li>
          <li onClick={() => navigate("/admin/payment-management")}>
            <i className="icon-payments"></i> Payment Management
          </li>
          <li className="logout" onClick={() => navigate("/login")}>
            <i className="icon-logout"></i> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`admin-content ${isSidebarOpen ? "shifted" : ""}`}>
        <h1 className="admin-title">Admin Dashboard</h1>
        <p>Welcome, Admin! Manage users, view reports, and control system settings.</p>

        {/* Admin Panel Options */}
        <div className="admin-options">
          <button className="admin-btn" onClick={() => navigate("/admin/manage-users")}>
            Manage Users
          </button>
          <button className="admin-btn" onClick={() => navigate("/admin/reports")}>
            View Reports
          </button>
          <button className="admin-btn" onClick={() => navigate("/admin/settings")}>
            System Settings
          </button>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

