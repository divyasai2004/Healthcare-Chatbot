import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAdmin }) => {
  return (
    <nav className="navbar">
      <Link to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}>Dashboard</Link>
      <Link to={isAdmin ? "/admin/users" : "/user/appointments"}>
        {isAdmin ? "Manage Users" : "My Appointments"}
      </Link>
      <Link to="/login">Logout</Link>
    </nav>
  );
};

export default Navbar;
