import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar"; // Ensure correct import
import "./AdminDashboard.css"; // Ensure you have styles

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <Sidebar /> {/* Sidebar for navigation */}
      
      <div className="admin-content">
        <h1 className="admin-title">Admin Dashboard</h1>
        <p>Welcome, Admin! Here you can manage users, view reports, and control system settings.</p>

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
