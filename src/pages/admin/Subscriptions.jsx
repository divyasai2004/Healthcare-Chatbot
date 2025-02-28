import React, { useState } from "react";

const Subscriptions = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const subscriptions = [
    { user: "Divya Ganti", plan: "Premium", status: "Active", expiry: "2025-05-10" },
    { user: "Sujatha", plan: "Premium", status: "Active", expiry: "2025-08-15" },
  ];

  const handleUpgrade = (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  };

  const closeModal = () => {
    setShowConfirmation(false);
    setSelectedUser(null);
  };

  const styles = {
    container: {
      color: "white",
      padding: "20px",
    },
    title: {
      marginBottom: "15px",
    },
    subscriptionList: {
      listStyle: "none",
      padding: 0,
    },
    subscriptionItem: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      boxShadow: "0 4px 10px rgba(0, 255, 255, 0.2)",
    },
    buttonWrapper: {
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
    upgradeBtn: {
      background: "#007bff",
      color: "white",
    },
    cancelBtn: {
      background: "#dc3545",
      color: "white",
    },
    modal: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#222",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 255, 255, 0.5)",
      textAlign: "center",
      zIndex: 1000,
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Subscription Management</h2>
      <ul style={styles.subscriptionList}>
        {subscriptions.map((sub, index) => (
          <li key={index} style={styles.subscriptionItem}>
            <span>{sub.user} - {sub.plan} Plan</span>
            <span>Expiry: {sub.expiry}</span>
            <div style={styles.buttonWrapper}>
              <button style={{ ...styles.button, ...styles.upgradeBtn }} onClick={() => handleUpgrade(sub.user)}>
                Upgrade
              </button>
              {sub.status === "Active" && (
                <button style={{ ...styles.button, ...styles.cancelBtn }}>Cancel</button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Upgrade Confirmation Modal */}
      {showConfirmation && (
        <>
          <div style={styles.overlay} onClick={closeModal}></div>
          <div style={styles.modal}>
            <h3>Upgrade Subscription</h3>
            <p>Are you sure you want to upgrade <strong>{selectedUser}</strong>?</p>
            <button style={{ ...styles.button, background: "#28a745", color: "white" }} onClick={closeModal}>
              Confirm
            </button>
            <button style={{ ...styles.button, ...styles.cancelBtn, marginLeft: "10px" }} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Subscriptions;
