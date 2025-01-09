import React from "react";
import "./UserDashboard.css";


const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome! Access your features here.</p>
      <div className="userdashboard-links">
        <a href="/user/appointments">My Appointments</a>
        <a href="/user/reports">My Reports</a>
        {/* Add more links */}
      </div>
    </div>
  );
};

export default UserDashboard;
