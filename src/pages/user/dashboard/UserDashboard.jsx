import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");

    if (!userRole || userRole !== "user") {
      alert("Unauthorized access! Redirecting to login.");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome! Access your features here.</p>
      
      <div className="userdashboard-links">
        <a href="/user/appointments">My Appointments</a>
        <a href="/user/reports">My Reports</a>
      </div>

      {/* ✅ Go to Homepage Button */}
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
};

export default UserDashboard;


// import React from "react";
// import "./UserDashboard.css";


// const UserDashboard = () => {
//   return (
//     <div className="user-dashboard">
//       <h1>User Dashboard</h1>
//       <p>Welcome! Access your features here.</p>
//       <div className="userdashboard-links">
//         <a href="/user/appointments">My Appointments</a>
//         <a href="/user/reports">My Reports</a>
//         {/* Add more links */}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
