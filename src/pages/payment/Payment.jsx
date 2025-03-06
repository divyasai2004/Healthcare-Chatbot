"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const BANK_LIST = [
  { id: "hdfc", name: "HDFC Bank" },
  { id: "icici", name: "ICICI Bank" },
  { id: "sbi", name: "State Bank of India" },
  { id: "axis", name: "Axis Bank" },
  { id: "kotak", name: "Kotak Mahindra Bank" },
  { id: "yes", name: "Yes Bank" },
  { id: "pnb", name: "Punjab National Bank" },
  { id: "bob", name: "Bank of Baroda" },
  { id: "idbi", name: "IDBI Bank" },
  { id: "canara", name: "Canara Bank" },
];

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [userDetails, setUserDetails] = useState({ name: "", email: "", mobile: "" });
  const [bankDetails, setBankDetails] = useState({ accountNumber: "", ifscCode: "", accountName: "", bankName: "" });
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiry: "", cvv: "", nameOnCard: "" });
  const [upiId, setUpiId] = useState("");
  const [netbankingDetails, setNetbankingDetails] = useState({ selectedBank: "", customerId: "", panNumber: "" });
  const [verificationStatus, setVerificationStatus] = useState("idle");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset bank verification status when payment method changes
    setVerificationStatus("idle");
    setVerificationMessage("");
  }, [selectedMethod]);

  // Validators updated with limits:
  // Account number must be exactly 16 digits.
  // IFSC code must be exactly 11 characters (e.g., HDFC0001234).
  const validators = {
    name: (val) => (!val.trim() ? "Name is required" : ""),
    email: (val) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !regex.test(val) ? "Invalid email format" : "";
    },
    mobile: (val) => (!/^\d{10}$/.test(val) ? "Mobile number must be 10 digits" : ""),
    accountNumber: (val) => (!/^\d{16}$/.test(val) ? "Account number must be exactly 16 digits" : ""),
    ifscCode: (val) =>
      !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(val)
        ? "Invalid IFSC code. It should be 11 characters (e.g., HDFC0001234)"
        : "",
    cardNumber: (val) => (!/^\d{16}$/.test(val) ? "Card number must be 16 digits" : ""),
    expiry: (val) => (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val) ? "Format must be MM/YY" : ""),
    cvv: (val) => (!/^\d{3}$/.test(val) ? "CVV must be 3 digits" : ""),
    panNumber: (val) => (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val) ? "Invalid PAN format" : ""),
  };

  // Pure validation functions (without updating state)
  const isUserDetailsValid = () => {
    const { name, email, mobile } = userDetails;
    return name.trim() && validators.email(email) === "" && /^\d{10}$/.test(mobile);
  };

  const isPaymentValid = () => {
    if (!isUserDetailsValid()) return false;
    switch (selectedMethod) {
      case "card":
        return (
          cardDetails.cardNumber.length === 16 &&
          validators.expiry(cardDetails.expiry) === "" &&
          /^\d{3}$/.test(cardDetails.cvv) &&
          cardDetails.nameOnCard.trim() !== ""
        );
      case "bank":
        return verificationStatus === "success";
      case "upi":
        return /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(upiId);
      case "netbanking":
        return (
          netbankingDetails.selectedBank !== "" &&
          netbankingDetails.customerId.trim() !== "" &&
          validators.panNumber(netbankingDetails.panNumber) === ""
        );
      default:
        return false;
    }
  };

  const verifyBankAccount = () => {
    if (!bankDetails.accountNumber || !bankDetails.ifscCode || !bankDetails.accountName || !bankDetails.bankName) {
      setVerificationStatus("error");
      setVerificationMessage("Please fill in all bank account details");
      return;
    }
    setVerificationStatus("verifying");
    setVerificationMessage("Verifying your bank account...");
    setTimeout(() => {
      // Check for exactly 16 digits and proper IFSC format
      const isAccountValid = /^\d{16}$/.test(bankDetails.accountNumber);
      const isIfscValid = /^[A-Z]{4}0[A-Z0-9]{6}$/.test(bankDetails.ifscCode);
      if (isAccountValid && isIfscValid) {
        setVerificationStatus("success");
        setVerificationMessage("Bank account verified successfully!");
      } else {
        setVerificationStatus("error");
        setVerificationMessage("Invalid bank account details. Please check and try again.");
      }
    }, 1500);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!isPaymentValid()) {
      alert("Please fill in all required fields correctly.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentConfirmed(true);
      setTimeout(() => {
        navigate("/success");
      }, 3000);
    }, 3000);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Complete Your Payment</h1>
      <p className="payment-subtitle">Secure & Fast Transactions</p>

      <div className="plan-summary">
        <h2>Selected Plan: Premium</h2>
        <p className="price">₹999 / month</p>
        <ul>
          <li>Unlimited chatbot access</li>
          <li>AI-powered analysis</li>
          <li>Priority support</li>
        </ul>
      </div>

      <form onSubmit={handlePayment}>
        {/* Billing Information Section */}
        <section className="billing-section">
          <h2>Billing Information</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={userDetails.name}
              onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={userDetails.email}
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number *</label>
            <input
              id="mobile"
              type="text"
              placeholder="Mobile Number"
              value={userDetails.mobile}
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobile: e.target.value.replace(/\D/g, "") })
              }
              maxLength="10"
              required
            />
          </div>
        </section>

        {/* Payment Method Section */}
        <section className="payment-method">
          <h2>Select Payment Method</h2>
          <div className="methods">
            <button type="button" className={selectedMethod === "card" ? "active" : ""} onClick={() => setSelectedMethod("card")}>
              Card
            </button>
            <button type="button" className={selectedMethod === "bank" ? "active" : ""} onClick={() => setSelectedMethod("bank")}>
              Bank Account
            </button>
            <button type="button" className={selectedMethod === "upi" ? "active" : ""} onClick={() => setSelectedMethod("upi")}>
              UPI
            </button>
            <button type="button" className={selectedMethod === "netbanking" ? "active" : ""} onClick={() => setSelectedMethod("netbanking")}>
              Net Banking
            </button>
          </div>

          {selectedMethod === "card" && (
            <fieldset className="card-details">
              <legend>Card Details</legend>
              <div className="form-group">
                <label htmlFor="nameOnCard">Name on Card *</label>
                <input
                  id="nameOnCard"
                  type="text"
                  placeholder="Name on Card"
                  value={cardDetails.nameOnCard}
                  onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cardNumber: e.target.value.replace(/\D/g, "") })
                  }
                  maxLength="16"
                  required
                />
              </div>
              <div className="card-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry (MM/YY) *</label>
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input
                    id="cvv"
                    type="text"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value.replace(/\D/g, "") })
                    }
                    maxLength="3"
                    required
                  />
                </div>
              </div>
            </fieldset>
          )}

          {selectedMethod === "bank" && (
            <fieldset className="bank-details">
              <legend>Bank Account Details</legend>
              <div className="form-group">
                <label htmlFor="accountName">Account Holder Name *</label>
                <input
                  id="accountName"
                  type="text"
                  placeholder="Account Holder Name"
                  value={bankDetails.accountName}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bankName">Select Bank *</label>
                <select
                  id="bankName"
                  value={bankDetails.bankName}
                  onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                  required
                >
                  <option value="">Select Bank</option>
                  {BANK_LIST.map((bank) => (
                    <option key={bank.id} value={bank.name}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="accountNumber">Account Number *</label>
                <input
                  id="accountNumber"
                  type="text"
                  placeholder="16-digit Account Number"
                  value={bankDetails.accountNumber}
                  onChange={(e) =>
                    setBankDetails({ ...bankDetails, accountNumber: e.target.value.replace(/\D/g, "") })
                  }
                  maxLength="16"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ifscCode">IFSC Code *</label>
                <input
                  id="ifscCode"
                  type="text"
                  placeholder="11-character IFSC Code"
                  value={bankDetails.ifscCode}
                  onChange={(e) => setBankDetails({ ...bankDetails, ifscCode: e.target.value.toUpperCase() })}
                  maxLength="11"
                  required
                />
              </div>
              <button type="button" className="verify-button" onClick={verifyBankAccount} disabled={verificationStatus === "verifying"}>
                {verificationStatus === "verifying" ? "Verifying..." : "Verify Bank Account"}
              </button>
              {verificationStatus !== "idle" && (
                <p className={`verification-message ${verificationStatus}`}>{verificationMessage}</p>
              )}
            </fieldset>
          )}

          {selectedMethod === "upi" && (
            <fieldset className="upi-details">
              <legend>UPI Payment</legend>
              <div className="form-group">
                <label htmlFor="upiId">UPI ID *</label>
                <input
                  id="upiId"
                  type="text"
                  placeholder="e.g. yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
              </div>
            </fieldset>
          )}

          {selectedMethod === "netbanking" && (
            <fieldset className="netbanking-details">
              <legend>Net Banking</legend>
              <div className="form-group">
                <label htmlFor="selectedBank">Select Bank *</label>
                <select
                  id="selectedBank"
                  value={netbankingDetails.selectedBank}
                  onChange={(e) => setNetbankingDetails({ ...netbankingDetails, selectedBank: e.target.value })}
                  required
                >
                  <option value="">Select Bank</option>
                  {BANK_LIST.map((bank) => (
                    <option key={bank.id} value={bank.id}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="customerId">Customer/User ID *</label>
                <input
                  id="customerId"
                  type="text"
                  placeholder="Customer or User ID (e.g. CUST12345)"
                  value={netbankingDetails.customerId}
                  onChange={(e) => setNetbankingDetails({ ...netbankingDetails, customerId: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="panNumber">PAN Number *</label>
                <input
                  id="panNumber"
                  type="text"
                  placeholder="PAN Number (e.g. ABCDE1234F)"
                  value={netbankingDetails.panNumber}
                  onChange={(e) =>
                    setNetbankingDetails({ ...netbankingDetails, panNumber: e.target.value.toUpperCase() })
                  }
                  maxLength="10"
                  required
                />
              </div>
            </fieldset>
          )}
        </section>

        <button type="submit" className={`pay-now ${isProcessing ? "processing" : ""}`}>
          {isProcessing ? <div className="loader"></div> : "Proceed to Pay"}
        </button>
      </form>

      {paymentConfirmed && (
        <div className="payment-confirmation">
          <h2>Payment Successful!</h2>
          <p>{userDetails.name} has successfully paid for the Premium Plan.</p>
          <p>A confirmation has been sent to your email: {userDetails.email}</p>
          <p>Redirecting to your dashboard...</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
