import React, { useState } from "react";

const Settings = () => {
  const [chatbotStatus, setChatbotStatus] = useState("active");
  const [databaseURI, setDatabaseURI] = useState("mongodb://localhost:27017/chatbot-1");

  const handleChatbotToggle = () => {
    setChatbotStatus((prev) => (prev === "active" ? "inactive" : "active"));
  };

  const handleDatabaseChange = (event) => {
    setDatabaseURI(event.target.value);
  };

  // Inline CSS styles
  const styles = {
    container: {
      color: "white",
      padding: "20px",
      textAlign: "center",
      maxWidth: "600px",
      margin: "auto",
    },
    section: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.2)",
    },
    heading: {
      borderBottom: "2px solid cyan",
      paddingBottom: "5px",
      marginBottom: "10px",
      color: "cyan",
    },
    button: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
      backgroundColor: "cyan",
      color: "black",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "5px",
      borderRadius: "5px",
      border: "none",
      background: "rgba(255, 255, 255, 0.2)",
      color: "white",
      fontSize: "14px",
    },
    label: {
      display: "block",
      marginTop: "10px",
      color: "cyan",
      fontWeight: "bold",
    },
    strongText: {
      color: "cyan",
    },
  };

  return (
    <div style={styles.container}>
      <h1>System Settings</h1>
      <p>Modify chatbot settings, manage database configurations, and more.</p>

      {/* Chatbot Activation Toggle */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Chatbot Status</h3>
        <p>
          Status: <strong style={styles.strongText}>{chatbotStatus}</strong>
        </p>
        <button style={styles.button} onClick={handleChatbotToggle}>
          {chatbotStatus === "active" ? "Deactivate Chatbot" : "Activate Chatbot"}
        </button>
      </div>

      {/* Database Configuration */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Database Configuration</h3>
        <label style={styles.label}>
          MongoDB URI:
          <input style={styles.input} type="text" value={databaseURI} onChange={handleDatabaseChange} />
        </label>
      </div>

      {/* Future configurations can be added here */}
    </div>
  );
};

export default Settings;
