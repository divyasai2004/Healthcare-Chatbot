import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Payment Successful!</h1>
        <p>Thank you for subscribing to our Premium Plan.</p>
        <p>You now have full access to all features.</p>
        <button onClick={() => navigate("/")}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Success;
