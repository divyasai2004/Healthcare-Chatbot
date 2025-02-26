import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaCalendarCheck, FaFileAlt, FaUserCircle, FaBars, FaTimes, FaHome } from "react-icons/fa";
import "./UserDashboard.css";

const UserDashboard = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="dashboard-container">
            {/* Sidebar Toggle Button */}
            {!isSidebarOpen && (
                <button className="sidebar-toggle open" onClick={() => setIsSidebarOpen(true)}>
                    <FaBars />
                </button>
            )}

            {/* Sidebar Navigation */}
            <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                <div className="sidebar-header">
                    <h2>Dashboard</h2>
                    <button className="sidebar-toggle close" onClick={() => setIsSidebarOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <ul>
                    <li onClick={() => navigate("/chatbot")}> <FaRobot /> Chatbot </li>
                    <li onClick={() => navigate("/appointments")}> <FaCalendarCheck /> Appointments </li>
                    <li onClick={() => navigate("/reports")}> <FaFileAlt /> Reports </li>
                    <li onClick={() => navigate("/")}> <FaHome /> Back to Homepage </li>
                </ul>
            </aside>

            {/* Main Dashboard Content */}
            <main className={`dashboard-content ${isSidebarOpen ? "shifted" : ""}`}>
                <header className="dashboard-header">
                    <FaUserCircle className="profile-icon" />
                    <div>
                        <h2>Welcome, User!</h2>
                        <p>Here you can chat with the chatbot, book appointments, and check health tips.</p>
                    </div>
                </header>

                <section className="feature-cards">
                    <div className="card" onClick={() => navigate("/chatbot")}>
                        <FaRobot className="card-icon" />
                        <h3>Chat with Bot</h3>
                        <p>Get instant health tips & symptom analysis.</p>
                    </div>
                    <div className="card" onClick={() => navigate("/appointments")}>
                        <FaCalendarCheck className="card-icon" />
                        <h3>Appointments</h3>
                        <p>View & manage doctor appointments.</p>
                    </div>
                    <div className="card" onClick={() => navigate("/reports")}>
                        <FaFileAlt className="card-icon" />
                        <h3>Health Reports</h3>
                        <p>Access your health records & reports.</p>
                    </div>
                </section>

                {/* Health Stats */}
                <section className="health-stats">
                    <h2>Your Health Stats</h2>
                    <div className="stats-grid">
                        <div className="stat">
                            <h3>Steps Walked</h3>
                            <p>5,432 steps</p>
                        </div>
                        <div className="stat">
                            <h3>Heart Rate</h3>
                            <p>72 bpm</p>
                        </div>
                        <div className="stat">
                            <h3>Calories Burned</h3>
                            <p>320 kcal</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UserDashboard;

