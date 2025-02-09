import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Context for Authentication
import { AuthProvider } from "./context/AuthContext";

// Page Imports
import LandingPage from "./pages/homepage/LandingPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import RoleSelection from "./pages/role-selection/RoleSelection"; 
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Fitbit from "./pages/fitbit/Fitbit";
import Appointment from "./pages/appointment/Appointment";
import Chatbot from "./pages/chatbot/Chatbot";
import Report from "./pages/report/Report";

// Admin Panel Imports
import Dashboard from "./pages/admin/dashboard/Dashboard";
import UserManagement from "./pages/admin/users/UsersManagement";
import AppointmentsManagement from "./pages/admin/appointments/AppointmentsManagement";

// User Dashboard
import UserDashboard from "./pages/user/dashboard/UserDashboard";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="maindiv">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/homepage" element={<LandingPage />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          
          {/* Role Selection Page (After Login) */}
          <Route path="/role-selection" element={<ProtectedRoute><RoleSelection /></ProtectedRoute>} />

          {/* Protected User-Specific Routes */}
          <Route path="/fitbit" element={<ProtectedRoute allowedRoles={["user"]}><Fitbit /></ProtectedRoute>} />
          <Route path="/appointment" element={<ProtectedRoute allowedRoles={["user"]}><Appointment /></ProtectedRoute>} />
          <Route path="/chatbot" element={<ProtectedRoute allowedRoles={["user"]}><Chatbot /></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute allowedRoles={["user"]}><Report /></ProtectedRoute>} />

          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute allowedRoles={["admin"]}><UserManagement /></ProtectedRoute>} />
          <Route path="/admin/appointments" element={<ProtectedRoute allowedRoles={["admin"]}><AppointmentsManagement /></ProtectedRoute>} />

          {/* User Dashboard */}
          <Route path="/user-dashboard" element={<ProtectedRoute allowedRoles={["user"]}><UserDashboard /></ProtectedRoute>} />

          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// // Context for Authentication
// import { AuthProvider } from "./context/AuthContext";

// // Page Imports
// import LandingPage from "./pages/homepage/LandingPage";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";
// import ContinueAs from "./pages/role-selection/RoleSelection"; 
// import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
// import Fitbit from "./pages/fitbit/Fitbit";
// import Appointment from "./pages/appointment/Appointment";
// import Chatbot from "./pages/chatbot/Chatbot";
// import Report from "./pages/report/Report";


// // Admin Panel Imports
// import Dashboard from "./pages/admin/dashboard/Dashboard";
// import UserManagement from "./pages/admin/users/UsersManagement";
// import AppointmentsManagement from "./pages/admin/appointments/AppointmentsManagement";

// // User Dashboard
// import UserDashboard from "./pages/user/dashboard/UserDashboard";

// import "./App.css";

// const App = () => {
//   return (
//     <AuthProvider>
//       <div className="maindiv">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<LandingPage />} /> 
//           <Route path="/homepage" element={<LandingPage />} />
//           <Route path="/register" element={<Register />} /> 
//           <Route path="/login" element={<Login />} /> 
//           <Route path="/continue-as" element={<ProtectedRoute><ContinueAs /></ProtectedRoute>} />

//           {/* Protected User-Specific Routes */}
//           <Route path="/fitbit" element={<ProtectedRoute allowedRoles={["user"]}><Fitbit /></ProtectedRoute>} />
//           <Route path="/appointment" element={<ProtectedRoute allowedRoles={["user"]}><Appointment /></ProtectedRoute>} />
//           <Route path="/chatbot" element={<ProtectedRoute allowedRoles={["user"]}><Chatbot /></ProtectedRoute>} />
//           <Route path="/report" element={<ProtectedRoute allowedRoles={["user"]}><Report /></ProtectedRoute>} />

//           {/* Admin Routes */}
//           <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><Dashboard /></ProtectedRoute>} />
//           <Route path="/admin/users" element={<ProtectedRoute allowedRoles={["admin"]}><UserManagement /></ProtectedRoute>} />
//           <Route path="/admin/appointments" element={<ProtectedRoute allowedRoles={["admin"]}><AppointmentsManagement /></ProtectedRoute>} />

//           {/* User Dashboard */}
//           <Route path="/user/dashboard" element={<ProtectedRoute allowedRoles={["user"]}><UserDashboard /></ProtectedRoute>} />

//           {/* Catch-All Route */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// };

// export default App;

