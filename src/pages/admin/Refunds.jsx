import React, { useState } from "react";

const Refunds = () => {
  const [refundRequests, setRefundRequests] = useState([
    { id: "#REF56789", user: "Divya Ganti", amount: "₹3,495.40", reason: "Duplicate payment" },
    { id: "#REF11223", user: "Jasmin", amount: "₹2,184.63", reason: "Service not received" },
  ]);

  const handleAction = (id, action) => {
    if (window.confirm(`Are you sure you want to ${action} this refund?`)) {
      setRefundRequests(refundRequests.filter((refund) => refund.id !== id));
      alert(`Refund ${action}d successfully!`);
    }
  };

  const styles = {
    container: {
      color: "white",
      padding: "20px",
    },
    refundList: {
      listStyle: "none",
      padding: 0,
      marginTop: "20px",
    },
    refundItem: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      boxShadow: "0 4px 10px rgba(0, 255, 255, 0.2)",
    },
    buttonsWrapper: {
      marginTop: "10px",
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "all 0.3s ease-in-out",
    },
    approveBtn: {
      background: "#28a745",
      color: "white",
    },
    rejectBtn: {
      background: "#dc3545",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Pending Refund Requests</h2>
      {refundRequests.length === 0 ? (
        <p>No pending refund requests.</p>
      ) : (
        <ul style={styles.refundList}>
          {refundRequests.map((refund, index) => (
            <li key={index} style={styles.refundItem}>
              <span>{refund.id} - {refund.user} - {refund.amount}</span>
              <span>{refund.reason}</span>
              <div style={styles.buttonsWrapper}>
                <button
                  style={{ ...styles.button, ...styles.approveBtn }}
                  onClick={() => handleAction(refund.id, "approve")}
                >
                  Approve
                </button>
                <button
                  style={{ ...styles.button, ...styles.rejectBtn }}
                  onClick={() => handleAction(refund.id, "reject")}
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Refunds;

