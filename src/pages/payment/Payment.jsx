"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Payment.css"

const VALID_TEST_ACCOUNTS = [
  { accountNumber: "1234567890", routingNumber: "123456789", name: "Divyasai Ganti" },
  { accountNumber: "0987654321", routingNumber: "987654321", name: "Divyasai Ganti" },
]

const USER = {
  name: "Divyasai Ganti",
  email: "divya@gmail.com",
}

const BANK_LIST = [
  { id: "hdfc", name: "HDFC Bank" },
  { id: "icici", name: "ICICI Bank" },
  { id: "sbi", name: "State Bank of India" },
  { id: "axis", name: "Axis Bank" },
  { id: "kotak", name: "Kotak Mahindra Bank" },
  { id: "yes", name: "Yes Bank" },
  { id: "pnb", name: "Punjab National Bank" },
  { id: "bob", name: "Bank of Baroda" },
]

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    routingNumber: "",
    accountName: "",
  })
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  })
  const [upiId, setUpiId] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [verificationStatus, setVerificationStatus] = useState("idle")
  const [verificationMessage, setVerificationMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentConfirmed, setPaymentConfirmed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setVerificationStatus("idle")
    setVerificationMessage("")
  }, [selectedMethod])

  const handleBankDetailsChange = (field, value) => {
    setBankDetails((prev) => ({
      ...prev,
      [field]: value,
    }))
    setVerificationStatus("idle")
    setVerificationMessage("")
  }

  const handleCardDetailsChange = (field, value) => {
    setCardDetails((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const verifyBankAccount = () => {
    if (!bankDetails.accountNumber || !bankDetails.routingNumber || !bankDetails.accountName) {
      setVerificationStatus("error")
      setVerificationMessage("Please fill in all bank account details")
      return
    }

    setVerificationStatus("verifying")
    setVerificationMessage("Verifying your bank account...")

    setTimeout(() => {
      const isValidTestAccount = VALID_TEST_ACCOUNTS.some(
        (account) =>
          account.accountNumber === bankDetails.accountNumber && account.routingNumber === bankDetails.routingNumber,
      )

      const isValidFormat =
        bankDetails.accountNumber.length >= 8 &&
        bankDetails.accountNumber.length <= 17 &&
        bankDetails.routingNumber.length === 9 &&
        /^\d+$/.test(bankDetails.accountNumber) &&
        /^\d+$/.test(bankDetails.routingNumber)

      if (isValidTestAccount) {
        setVerificationStatus("success")
        setVerificationMessage("Bank account verified successfully! (Test account recognized)")
      } else if (isValidFormat) {
        setVerificationStatus("success")
        setVerificationMessage("Bank account verified successfully!")
      } else {
        setVerificationStatus("error")
        setVerificationMessage("Invalid bank account details. Please check and try again.")
      }
    }, 1500)
  }

  const validatePaymentDetails = () => {
    switch (selectedMethod) {
      case "card":
        return (
          cardDetails.cardNumber.length === 16 &&
          /^\d+$/.test(cardDetails.cardNumber) &&
          /^\d{2}\/\d{2}$/.test(cardDetails.expiry) &&
          /^\d{3}$/.test(cardDetails.cvv)
        )
      case "bank":
        return verificationStatus === "success"
      case "upi":
        return /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(upiId)
      case "netbanking":
        return selectedBank !== ""
      default:
        return false
    }
  }

  const handlePayment = () => {
    if (!validatePaymentDetails()) {
      alert("Please fill in all required fields correctly.")
      return
    }

    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      setPaymentConfirmed(true)

      setTimeout(() => {
        navigate("/success")
      }, 3000)
    }, 3000)
  }

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
        <input type="text" placeholder="Full Name" value={USER.name} readOnly />
        <input type="email" placeholder="Email Address" value={USER.email} readOnly />
      </div>

      {/* Payment Method Selection */}
      <div className="payment-method">
        <h2>Select Payment Method</h2>
        <div className="methods">
          <button className={selectedMethod === "card" ? "active" : ""} onClick={() => setSelectedMethod("card")}>
            Credit/Debit Card
          </button>
          <button className={selectedMethod === "bank" ? "active" : ""} onClick={() => setSelectedMethod("bank")}>
            Bank Account
          </button>
          <button className={selectedMethod === "upi" ? "active" : ""} onClick={() => setSelectedMethod("upi")}>
            UPI
          </button>
          <button
            className={selectedMethod === "netbanking" ? "active" : ""}
            onClick={() => setSelectedMethod("netbanking")}
          >
            Net Banking
          </button>
        </div>

        {/* Payment Input Fields */}
        {selectedMethod === "card" && (
          <div className="card-details">
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) => handleCardDetailsChange("cardNumber", e.target.value)}
              maxLength="16"
              required
            />
            <div className="card-row">
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                value={cardDetails.expiry}
                onChange={(e) => handleCardDetailsChange("expiry", e.target.value)}
                maxLength="5"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) => handleCardDetailsChange("cvv", e.target.value)}
                maxLength="3"
                required
              />
            </div>
          </div>
        )}

        {selectedMethod === "bank" && (
          <div className="bank-details">
            <input
              type="text"
              placeholder="Account Holder Name"
              value={bankDetails.accountName}
              onChange={(e) => handleBankDetailsChange("accountName", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Account Number"
              value={bankDetails.accountNumber}
              onChange={(e) => handleBankDetailsChange("accountNumber", e.target.value)}
              required
            />
            <p className="hint-text">For testing, try account number: 1234567890</p>

            <input
              type="text"
              placeholder="Routing Number"
              value={bankDetails.routingNumber}
              onChange={(e) => handleBankDetailsChange("routingNumber", e.target.value)}
              required
            />
            <p className="hint-text">For testing, try routing number: 123456789</p>

            <button className="verify-button" onClick={verifyBankAccount} disabled={verificationStatus === "verifying"}>
              {verificationStatus === "verifying" ? "Verifying..." : "Verify Bank Account"}
            </button>

            {verificationStatus === "success" && (
              <div className="verification-message success">
                <span className="icon">✓</span>
                <p>{verificationMessage}</p>
              </div>
            )}

            {verificationStatus === "error" && (
              <div className="verification-message error">
                <span className="icon">!</span>
                <p>{verificationMessage}</p>
              </div>
            )}
          </div>
        )}

        {selectedMethod === "upi" && (
          <input
            type="text"
            placeholder="Enter UPI ID (xyz@upi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        )}

        {selectedMethod === "netbanking" && (
          <div className="netbanking-details">
            <select value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)} required>
              <option value="">Select Bank</option>
              {BANK_LIST.map((bank) => (
                <option key={bank.id} value={bank.id}>
                  {bank.name}
                </option>
              ))}
            </select>
            {selectedBank && (
              <div className="bank-info">
                <p>You've selected: {BANK_LIST.find((bank) => bank.id === selectedBank)?.name}</p>
                <p>You will be redirected to your bank's secure payment gateway to complete the transaction.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        className={`pay-now ${isProcessing ? "processing" : ""}`}
        onClick={handlePayment}
        disabled={isProcessing || !validatePaymentDetails()}
      >
        {isProcessing ? <div className="loader"></div> : "Proceed to Pay"}
      </button>

      {paymentConfirmed && (
        <div className="payment-confirmation">
          <h2>Payment Successful!</h2>
          <p>{USER.name} has successfully paid for the Premium Plan.</p>
          <p>Redirecting to your dashboard...</p>
        </div>
      )}
    </div>
  )
}

export default Payment