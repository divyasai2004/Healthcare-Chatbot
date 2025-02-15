import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <h1 className="payment-title">Complete Your Payment</h1>
      <p className="payment-subtitle">Secure & Fast Transactions</p>

      {/* Plan Details */}
      <div className="plan-summary">
        <h2>Selected Plan: Premium</h2>
        <p className="price">$9.99 / month</p>
        <ul>
          <li>✔ Unlimited chatbot access</li>
          <li>✔ AI-powered analysis</li>
          <li>✔ Priority support</li>
        </ul>
      </div>

      {/* Billing Information */}
      <div className="billing-section">
        <h2>Billing Information</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
      </div>

      {/* Payment Method Selection */}
      <div className="payment-method">
        <h2>Select Payment Method</h2>
        <div className="methods">
          <button className={selectedMethod === "card" ? "active" : ""} onClick={() => setSelectedMethod("card")}>
            Credit/Debit Card
          </button>
          <button className={selectedMethod === "upi" ? "active" : ""} onClick={() => setSelectedMethod("upi")}>
            UPI
          </button>
          <button className={selectedMethod === "netbanking" ? "active" : ""} onClick={() => setSelectedMethod("netbanking")}>
            Net Banking
          </button>
        </div>

        {/* Payment Input Fields */}
        {selectedMethod === "card" && (
          <div className="card-details">
            <input type="text" placeholder="Card Number" required />
            <div className="card-row">
              <input type="text" placeholder="Expiry (MM/YY)" required />
              <input type="text" placeholder="CVV" required />
            </div>
          </div>
        )}
        {selectedMethod === "upi" && <input type="text" placeholder="Enter UPI ID (xyz@upi)" required />}
        {selectedMethod === "netbanking" && (
          <select required>
            <option value="">Select Bank</option>
            <option value="hdfc">HDFC Bank</option>
            <option value="icici">ICICI Bank</option>
            <option value="sbi">State Bank of India</option>
            <option value="axis">Axis Bank</option>
          </select>
        )}
      </div>

      {/* Proceed Button */}
      <button className="pay-now" onClick={() => navigate("/success")}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default Payment;
