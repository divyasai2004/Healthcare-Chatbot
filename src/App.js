import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";  // ❌ Removed BrowserRouter

// Context for Authentication
import { AuthProvider } from "./context/AuthContext";

// Page Imports
import LandingPage from "./pages/homepage/LandingPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Fitbit from "./pages/fitbit/Fitbit";
import Appointment from "./pages/appointment/Appointment";
import Chatbot from "./pages/chatbot/Chatbot";
import Report from "./pages/report/Report";
import Plans from "./pages/plan/Plans";
import Payment from "./pages/payment/Payment.jsx";
import Success from "./pages/success/Success";

import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";
import PaymentManagement from "./pages/admin/PaymentManagement.jsx";
import SymptomAnalysis from "./pages/SymptomAnalysis";


import DownloadReport from "./pages/report/DownloadReport";
import Appoint from "./pages/report/Appoint";
import HealthStatistics from "./pages/report/HealthStatistics";

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
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          
          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/payment-management" element={<PaymentManagement />} />
          
          {/* User Routes */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          


          {/* Protected User-Specific Routes */}
          <Route path="/fitbit" element={<ProtectedRoute allowedRoles={["user"]}><Fitbit /></ProtectedRoute>} />
          <Route path="/appointment" element={<ProtectedRoute allowedRoles={["user"]}><Appointment /></ProtectedRoute>} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/report" element={<ProtectedRoute allowedRoles={["user"]}><Report /></ProtectedRoute>} />
          <Route path="/symptom-analysis" element={<ProtectedRoute allowedRoles={["user"]}><SymptomAnalysis /></ProtectedRoute>} />

          <Route path="/" element={<Report />} />
          <Route path="/download-report" element={<DownloadReport />} />
          <Route path="/appointments" element={<Appoint />} />
          <Route path="/health-statistics" element={<HealthStatistics />} />
          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;


