import React from 'react';
import './LandingPage.css';


import Header from '../../container/header/Header';

const LandingPage = () => {
  return (
    <div className="magical-landing">
        <Header/>
      <header className="magical-header">
        {/* <div className="logo">HealthBot</div> */}
        <nav className="magical-nav">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/login">Login</a>
          <a href="/register" className="magical-btn">Get Started</a>
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
