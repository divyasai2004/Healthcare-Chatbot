import React from "react";
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage your system here.</p>
      <div className="dashboard-links">
        <a href="/admin/users">Manage Users</a>
        <a href="/admin/appointments">Manage Appointments</a>
        {/* Add more links */}
      </div>
    </div>
  );
};

export default AdminDashboard;
