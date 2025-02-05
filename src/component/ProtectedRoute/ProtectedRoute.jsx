import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy Auth Context for authentication state
import { useAuth } from '../../context/AuthContext';// Update the path if necessary


const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role } = useAuth(); // Ensure you are getting the authenticated user's info

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to a "not authorized" page if user role is not allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/not-authorized" replace />;
  }

  // Render children if authenticated and role is allowed
  return children;
};

export default ProtectedRoute;
