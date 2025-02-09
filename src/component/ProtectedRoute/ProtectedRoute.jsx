import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (!role) {
    return <Navigate to="/role-selection" replace />; // ✅ Ensure valid role
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;


// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user, role } = useAuth();
//   const location = useLocation();

//   // Redirect to Register if user is not logged in
//   if (!user) {
//     return <Navigate to="/register" state={{ from: location.pathname }} replace />;
//   }

//   // Redirect to Continue-As if role selection is pending
//   if (!role) {
//     return <Navigate to="/continue-as" replace />;
//   }

//   // If the user role is not allowed, redirect to homepage
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
