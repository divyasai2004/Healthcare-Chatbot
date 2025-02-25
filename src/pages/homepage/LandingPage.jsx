import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom'; // Changed to Link to work with react-router

import Header from '../../container/header/Header';

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  // UseEffect to listen to login state change
  useEffect(() => {
    const handleLoginChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("loginStatusChange", handleLoginChange);

    return () => {
      window.removeEventListener("loginStatusChange", handleLoginChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("loginStatusChange")); // Notify others of status change
  };

  return (
    <div className="magical-landing">
      <Header />
      <header className="magical-header">
        {/* Navbar with dynamic Login/Logout */}
      <nav className="magical-nav">
        <a href="#features">Features</a>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <a href="/register" className="magical-btn">Get Started</a>
        )}
      </nav>
      </header>

      <section className="magical-hero">
        <h1 className="glowing-text">Your Magical Healthcare Assistant</h1>
        <p>Empowering you to take control of your health.</p>
        <a href="/chatbot" className="cta-glow">Start Chatting</a>
      </section>

      <section id="features" className="magical-features">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>💊 Symptom Analysis</h3>
            <p>AI-powered insights for your health symptoms.</p>
          </div>
          <div className="feature-card">
            <h3>🩺 Appointment Scheduling</h3>
            <p>Book with healthcare professionals instantly.</p>
          </div>
          <div className="feature-card">
            <h3>📄 Reports</h3>
            <p>Access and download health reports anytime.</p>
          </div>

          <div className="feature-card">
            <h3>💪 FitBit</h3>
            <p>All your fitness insights on one sleek card.</p>
          </div>
        </div>
      </section>

      <footer className="magical-footer">
        <p>&copy; 2025 HealthBot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
